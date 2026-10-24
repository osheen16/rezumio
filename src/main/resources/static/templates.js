document.addEventListener("DOMContentLoaded", function () {
    const templatesContainer = document.querySelector(".templates-container");

    if (!templatesContainer) {
        console.error("Error: Templates container not found.");
        return;
    }

    const templateNames = [
        "ATS_Bold_Accounting", "ATS_Classic", "Attorney_Resume",
        "Bold_Attorney", "Playful_Business", "Industry_Manager_Resume",
        "Paralegal_Resume", "Modern_Bold_Sales_Resume",
        "Social_Media_Marketing_Resume", "Stylish_Sales_Resume",
        "Stylish_Teaching_Resume", "Modern_Hospitality_Resume",
        "Modern_Nursing_Resume", "Swiss_Design_Resume",
        "Geometric_Resume", "Modern_Initials_Resume",
        "Classic_Management_Resume", "Color_Block_Resume",
        "Creative_Sales_Resume", "Creative_Teaching_Resume",
        "CV_Resume", "Modern_Florist_Resume"
    ];

    function formatTemplateName(template) {
        return template
            .replace(/_/g, " ") 
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    templateNames.forEach(template => {
        const templateCard = document.createElement("div");
        templateCard.classList.add("template-card");

        templateCard.innerHTML = `
            <img src="images/${template}.png" alt="${template}">
            <h3>${formatTemplateName(template)}</h3>
            <button onclick="selectTemplate('${template}')">Use This Template</button>
        `;

        templatesContainer.appendChild(templateCard);
    });
});

function selectTemplate(template) {
    window.location.href = `editor.html?template=${encodeURIComponent(template)}`;
}
