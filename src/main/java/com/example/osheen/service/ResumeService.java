package com.example.osheen.service;

import com.example.osheen.model.ResumeData;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.apache.poi.xwpf.usermodel.XWPFTableRow;
import org.apache.poi.xwpf.usermodel.XWPFTableCell;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ResumeService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ResumeService.class);

    public byte[] generateResume(ResumeData resumeData) throws Exception {
        LOGGER.info("Generating resume for template: {}", resumeData.getTemplate());

        String templatePath = "templates/" + resumeData.getTemplate() + ".docx";
        ClassPathResource resource = new ClassPathResource(templatePath);
        if (!resource.exists()) {
            LOGGER.error("Template file not found: {}", templatePath);
            throw new IllegalArgumentException("Template file not found: " + resumeData.getTemplate());
        }

        try (InputStream inputStream = resource.getInputStream();
             XWPFDocument document = new XWPFDocument(inputStream);
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Map<String, String> fields = resumeData.getFields();
            LOGGER.debug("Fields received: {}", fields);

            // Determine the number of job entries
            int maxJobs = 0;
            for (String key : fields.keySet()) {
                if (key.startsWith("JOB_TITLE_")) {
                    int jobNum = Integer.parseInt(key.replace("JOB_TITLE_", ""));
                    maxJobs = Math.max(maxJobs, jobNum);
                }
            }
            LOGGER.debug("Detected {} job entries", maxJobs);

            // Log full document text (paragraphs) before replacement
            StringBuilder fullDocumentText = new StringBuilder();
            for (XWPFParagraph paragraph : document.getParagraphs()) {
                for (XWPFRun run : paragraph.getRuns()) {
                    String text = run.getText(0);
                    if (text != null) {
                        fullDocumentText.append(text);
                    }
                }
            }
            LOGGER.debug("Full document text (paragraphs) before replacement: {}", fullDocumentText.toString());

            // Log full table text before replacement
            StringBuilder fullTableText = new StringBuilder();
            for (XWPFTable table : document.getTables()) {
                for (XWPFTableRow row : table.getRows()) {
                    for (XWPFTableCell cell : row.getTableCells()) {
                        for (XWPFParagraph paragraph : cell.getParagraphs()) {
                            for (XWPFRun run : paragraph.getRuns()) {
                                String text = run.getText(0);
                                if (text != null) {
                                    fullTableText.append(text);
                                }
                            }
                        }
                    }
                }
            }
            LOGGER.debug("Full document text (tables) before replacement: {}", fullTableText.toString());

            // Process paragraphs with job entry limit
            int jobCount = 0;
            for (int i = 0; i < document.getParagraphs().size(); i++) {
                XWPFParagraph paragraph = document.getParagraphs().get(i);
                String text = paragraph.getText();
                if (text != null && text.contains("{JOB_TITLE_")) {
                    jobCount++;
                    if (jobCount <= maxJobs) {
                        replacePlaceholdersInParagraph(paragraph, fields);
                    } else {
                        document.removeBodyElement(i--); // Remove excess job sections
                    }
                } else {
                    replacePlaceholdersInParagraph(paragraph, fields);
                }
            }

            // Process tables with job entry limit
            jobCount = 0;
            for (XWPFTable table : document.getTables()) {
                for (XWPFTableRow row : table.getRows()) {
                    for (XWPFTableCell cell : row.getTableCells()) {
                        for (int i = 0; i < cell.getParagraphs().size(); i++) {
                            XWPFParagraph paragraph = cell.getParagraphs().get(i);
                            String text = paragraph.getText();
                            if (text != null && text.contains("{JOB_TITLE_")) {
                                jobCount++;
                                if (jobCount <= maxJobs) {
                                    replacePlaceholdersInParagraph(paragraph, fields);
                                } else {
                                    cell.removeParagraph(i--); // Remove excess job sections in tables
                                }
                            } else {
                                replacePlaceholdersInParagraph(paragraph, fields);
                            }
                        }
                    }
                }
            }

            // Log full document text (paragraphs) after replacement
            StringBuilder updatedDocumentText = new StringBuilder();
            for (XWPFParagraph paragraph : document.getParagraphs()) {
                for (XWPFRun run : paragraph.getRuns()) {
                    String text = run.getText(0);
                    if (text != null) {
                        updatedDocumentText.append(text);
                    }
                }
            }
            LOGGER.debug("Full document text (paragraphs) after replacement: {}", updatedDocumentText.toString());

            // Log full table text after replacement
            StringBuilder updatedTableText = new StringBuilder();
            for (XWPFTable table : document.getTables()) {
                for (XWPFTableRow row : table.getRows()) {
                    for (XWPFTableCell cell : row.getTableCells()) {
                        for (XWPFParagraph paragraph : cell.getParagraphs()) {
                            for (XWPFRun run : paragraph.getRuns()) {
                                String text = run.getText(0);
                                if (text != null) {
                                    updatedTableText.append(text);
                                }
                            }
                        }
                    }
                }
            }
            LOGGER.debug("Full document text (tables) after replacement: {}", updatedTableText.toString());

            document.write(out);
            byte[] result = out.toByteArray();
            LOGGER.info("Resume generated successfully, size: {} bytes", result.length);
            return result;

        } catch (Exception e) {
            LOGGER.error("Error generating resume: {}", e.getMessage(), e);
            throw e;
        }
    }

    private void replacePlaceholdersInParagraph(XWPFParagraph paragraph, Map<String, String> fields) {
        String paragraphText = paragraph.getText();
        if (paragraphText == null || !paragraphText.contains("{")) {
            LOGGER.debug("Skipping paragraph (no placeholders): {}", paragraphText);
            return;
        }

        LOGGER.debug("Processing paragraph: {}", paragraphText);

        // Collect all runs
        StringBuilder fullText = new StringBuilder();
        for (XWPFRun run : paragraph.getRuns()) {
            String text = run.getText(0);
            if (text != null) {
                fullText.append(text);
            }
        }

        String originalText = fullText.toString();

        // Log unmatched placeholders
        Pattern pattern = Pattern.compile("\\{([^}]+)\\}");
        Matcher matcher = pattern.matcher(originalText);
        while (matcher.find()) {
            String key = matcher.group(1);
            if (!fields.containsKey(key)) {
                LOGGER.warn("No value provided for placeholder: {{{}}}", key);
            }
        }

        String updatedFullText = originalText;
        boolean textChanged = false;

        // Replace placeholders
        for (Map.Entry<String, String> entry : fields.entrySet()) {
            String placeholder = "{" + entry.getKey() + "}";
            String value = entry.getValue() != null ? entry.getValue() : "";
            if (updatedFullText.contains(placeholder)) {
                updatedFullText = updatedFullText.replace(placeholder, value);
                textChanged = true;
                LOGGER.debug("Replaced {} with {} in paragraph", placeholder, value);
            }
        }

        if (textChanged) {
            // Split by delimiters like • or , to preserve structure
            String[] parts = updatedFullText.split("\\s*[•,]\\s*");
            int runIndex = 0;
            for (int i = 0; i < paragraph.getRuns().size() && runIndex < parts.length; i++) {
                XWPFRun run = paragraph.getRuns().get(i);
                String originalRunText = run.getText(0);
                if (originalRunText != null) {
                    String newText = parts[runIndex];
                    if (runIndex < parts.length - 1) {
                        newText += originalText.contains("•") ? " •" : ",";
                    }
                    run.setText(newText, 0);
                    LOGGER.debug("Updated run {}: {} -> {}", runIndex, originalRunText, newText);
                    runIndex++;
                }
            }

            // Remove excess runs
            while (paragraph.getRuns().size() > runIndex) {
                paragraph.removeRun(runIndex);
            }

            // Add new runs for remaining parts
            while (runIndex < parts.length) {
                XWPFRun newRun = paragraph.createRun();
                String newText = parts[runIndex];
                if (runIndex < parts.length - 1) {
                    newText += " •"; // Default to • for Playful_Business
                }
                newRun.setText(newText);
                if (paragraph.getRuns().size() > 1) {
                    XWPFRun lastRun = paragraph.getRuns().get(paragraph.getRuns().size() - 2);
                    newRun.setBold(lastRun.isBold());
                    newRun.setItalic(lastRun.isItalic());
                    newRun.setFontSize(lastRun.getFontSize() != -1 ? lastRun.getFontSize() : 11);
                    newRun.setFontFamily(lastRun.getFontFamily() != null ? lastRun.getFontFamily() : "Calibri");
                    newRun.setColor(lastRun.getColor());
                    newRun.setUnderline(lastRun.getUnderline());
                }
                LOGGER.debug("Added new run {}: {}", runIndex, newText);
                runIndex++;
            }
        }
    }
}