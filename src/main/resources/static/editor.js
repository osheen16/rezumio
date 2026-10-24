// editor.js

// Template definitions with detailed field properties
const templates = {
    "ATS_Bold_Accounting": [
        { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
        { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
        { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
        { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
        { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
        { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website" },
        { "label": "PROFESSIONAL_SUMMARY", "type": "textarea", "placeholder": "Enter your professional summary", "class": "full-width" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
        { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name" },
        { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter responsibilities", "class": "full-width" },
        { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
        { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
        { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name" },
        { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location" },
        { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter responsibilities", "class": "full-width" },
        { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
        { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
        { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter company name" },
        { "label": "LOCATION_3", "type": "text", "placeholder": "Enter location" },
        { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter responsibilities", "class": "full-width" },
        { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
        { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree" },
        { "label": "GRADUATION_DATE", "type": "text", "placeholder": "e.g., 2023" },
        { "label": "ACADEMIC_ACHIEVEMENT", "type": "text", "placeholder": "Enter achievement" },
        { "label": "RELEVANT_COURSEWORK", "type": "text", "placeholder": "Enter coursework" },
        { "label": "GPA", "type": "text", "placeholder": "e.g., 3.8" },
        { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_4", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_5", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_6", "type": "text", "placeholder": "Enter skill", "class": "half-width" }
    ],
    "ATS_Classic": [
        { "label": "Name", "type": "text", "placeholder": "Enter your name" },
        { "label": "Address", "type": "text", "placeholder": "Enter your address" },
        { "label": "Phone", "type": "tel", "placeholder": "e.g., 98765-43210" },
        { "label": "Email", "type": "email", "placeholder": "Enter your email" },
        { "label": "Profile Summary", "type": "textarea", "placeholder": "Enter your profile summary", "class": "full-width" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name" },
        { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter responsibilities", "class": "full-width" },
        { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2022" },
        { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name" },
        { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location" },
        { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter responsibilities", "class": "full-width" },
        { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "GRADUATION YEAR", "type": "text", "placeholder": "e.g., 2023" },
        { "label": "Degree", "type": "text", "placeholder": "Enter your degree" },
        { "label": "Location", "type": "text", "placeholder": "Enter location" },
        { "label": "University", "type": "text", "placeholder": "Enter university name" },
        { "label": "GPA", "type": "text", "placeholder": "e.g., 3.8" },
        { "label": "honor_society", "type": "text", "placeholder": "Enter honor society" },
        { "label": "achievement_1", "type": "text", "placeholder": "Enter achievement" },
        { "label": "achievement_2", "type": "text", "placeholder": "Enter achievement" },
        { "label": "achievement_3", "type": "text", "placeholder": "Enter achievement" }
    ],
    "Modern_Initials_Resume": [
    { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
    { "label": "ABOUT_ME", "type": "textarea", "placeholder": "Enter a brief summary about yourself", "class": "full-width" },
    { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title for position 1" },
    { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name for position 1" },
    { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location for position 1" },
    { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
    { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
    { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter first responsibility for position 1", "class": "full-width" },
    { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter second responsibility for position 1", "class": "full-width" },
    { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title for position 2" },
    { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name for position 2" },
    { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location for position 2" },
    { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
    { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
    { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter first responsibility for position 2", "class": "full-width" },
    { "label": "RESPONSIBILITY_4", "type": "textarea", "placeholder": "Enter second responsibility for position 2", "class": "full-width" },
    { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title for position 3" },
    { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter company name for position 3" },
    { "label": "LOCATION_3", "type": "text", "placeholder": "Enter location for position 3" },
    { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
    { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
    { "label": "RESPONSIBILITY_5", "type": "textarea", "placeholder": "Enter first responsibility for position 3", "class": "full-width" },
    { "label": "RESPONSIBILITY_6", "type": "textarea", "placeholder": "Enter second responsibility for position 3", "class": "full-width" },
    { "label": "DEGREE_1", "type": "text", "placeholder": "Enter your first degree (e.g., Bachelor of Science)" },
    { "label": "UNIVERSITY_1", "type": "text", "placeholder": "Enter university name for degree 1" },
    { "label": "START_DATE_EDU_1", "type": "text", "placeholder": "e.g., Sep 2016" },
    { "label": "END_DATE_EDU_1", "type": "text", "placeholder": "e.g., May 2020" },
    { "label": "DEGREE_2", "type": "text", "placeholder": "Enter your second degree (optional)" },
    { "label": "UNIVERSITY_2", "type": "text", "placeholder": "Enter university name for degree 2 (optional)" },
    { "label": "START_DATE_EDU_2", "type": "text", "placeholder": "e.g., Sep 2014" },
    { "label": "END_DATE_EDU_2", "type": "text", "placeholder": "e.g., May 2016" },
    { "label": "DEGREE_3", "type": "text", "placeholder": "Enter your third degree (optional)" },
    { "label": "UNIVERSITY_3", "type": "text", "placeholder": "Enter university name for degree 3 (optional)" },
    { "label": "START_DATE_EDU_3", "type": "text", "placeholder": "e.g., Sep 2012" },
    { "label": "END_DATE_EDU_3", "type": "text", "placeholder": "e.g., May 2014" },
    { "label": "SKILL_1", "type": "text", "placeholder": "Enter first skill", "class": "half-width" },
    { "label": "SKILL_2", "type": "text", "placeholder": "Enter second skill", "class": "half-width" },
    { "label": "SKILL_3", "type": "text", "placeholder": "Enter third skill", "class": "half-width" },
    { "label": "SKILL_4", "type": "text", "placeholder": "Enter fourth skill", "class": "half-width" },
    { "label": "SKILL_5", "type": "text", "placeholder": "Enter fifth skill", "class": "half-width" },
    { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website or portfolio URL" },
    { "label": "LOCATION", "type": "text", "placeholder": "Enter your current location" },
    { "label": "EMAIL", "type": "email", "placeholder": "Enter your email address" },
    { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" }
],
 "Playful_Business": [
    { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
    { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
    { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
    { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
    { "label": "EMAIL", "type": "email", "placeholder": "Enter your email address" },
    { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website or portfolio URL" },
    { "label": "OBJECTIVE_STATEMENT", "type": "textarea", "placeholder": "Enter your career objective or summary", "class": "full-width" },
    { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
    { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
    { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title for position 1" },
    { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name for position 1" },
    { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
    { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
    { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title for position 2" },
    { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name for position 2" },
    { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
    { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
    { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title for position 3" },
    { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter company name for position 3" },
    { "label": "EXPERIENCE_DESCRIPTION", "type": "textarea", "placeholder": "Enter a key accomplishment or responsibility (e.g., Developed and implemented office policies...)", "class": "full-width" },
    { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
    { "label": "Location", "type": "text", "placeholder": "Enter university location" },
    { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree (e.g., Bachelor of Science)" },
    { "label": "Graduation Year", "type": "text", "placeholder": "e.g., 2020" },
    { "label": "COMMUNICATION_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Describe your communication skills", "class": "full-width" },
    { "label": "LEADERSHIP_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Describe your leadership skills", "class": "full-width" },
    { "label": "REFERENCE_DETAILS", "type": "textarea", "placeholder": "Enter reference details (e.g., name, title, contact info)", "class": "full-width" }
],
"Modern_Nursing_Resume": [
    { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
    { "label": "JOB_TITLE", "type": "text", "placeholder": "Enter your job title" },
    { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
    { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
    { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
    { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
    { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website" },
    { "label": "COMMUNICATION_DETAILS", "type": "textarea", "placeholder": "Enter your communication skills or details", "class": "full-width" },
    { "label": "LEADERSHIP_DETAILS", "type": "textarea", "placeholder": "Enter your leadership skills or details", "class": "full-width" },
    { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
    { "label": "CITY_STATE", "type": "text", "placeholder": "Enter city, state" },
    { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree" },
    { "label": "COURSEWORK", "type": "text", "placeholder": "Enter relevant coursework" },
    { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
    { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
    { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title" },
    { "label": "DEPARTMENT_1", "type": "text", "placeholder": "Enter department" },
    { "label": "COMPANY_1", "type": "text", "placeholder": "Enter company name" },
    { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
    { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
    { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title" },
    { "label": "DEPARTMENT_2", "type": "text", "placeholder": "Enter department" },
    { "label": "COMPANY_2", "type": "text", "placeholder": "Enter company name" },
    { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
    { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
    { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title" },
    { "label": "DEPARTMENT_3", "type": "text", "placeholder": "Enter department" },
    { "label": "COMPANY_3", "type": "text", "placeholder": "Enter company name" },
    { "label": "EXPERIENCE_DESCRIPTION", "type": "textarea", "placeholder": "Enter detailed experience description", "class": "full-width" },
    { "label": "REFERENCES", "type": "textarea", "placeholder": "Enter references (e.g., name, title, contact)", "class": "full-width" }
],
"Social_Media_Marketing_Resume": [
    { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
    { "label": "JOB_TITLE", "type": "text", "placeholder": "Enter your job title" },
    { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
    { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
    { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website" },
    { "label": "PROFILE_SUMMARY", "type": "textarea", "placeholder": "Enter your profile summary", "class": "full-width" },
    { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
    { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
    { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
    { "label": "SKILL_4", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
    { "label": "SKILL_5", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
    { "label": "SKILL_6", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
    { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title" },
    { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
    { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
    { "label": "RESPONSIBILITY_1", "type": "text", "placeholder": "Enter responsibility" },
    { "label": "RESPONSIBILITY_2", "type": "text", "placeholder": "Enter responsibility" },
    { "label": "RESPONSIBILITY_3", "type": "text", "placeholder": "Enter responsibility" },
    { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title" },
    { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
    { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
    { "label": "RESPONSIBILITY_4", "type": "text", "placeholder": "Enter responsibility" },
    { "label": "RESPONSIBILITY_5", "type": "text", "placeholder": "Enter responsibility" },
    { "label": "RESPONSIBILITY_6", "type": "text", "placeholder": "Enter responsibility" },
    { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title" },
    { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
    { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
    { "label": "RESPONSIBILITY_7", "type": "text", "placeholder": "Enter responsibility" },
    { "label": "RESPONSIBILITY_8", "type": "text", "placeholder": "Enter responsibility" },
    { "label": "RESPONSIBILITY_9", "type": "text", "placeholder": "Enter responsibility" },
    { "label": "UNIVERSITY_1", "type": "text", "placeholder": "Enter university name" },
    { "label": "START_DATE_EDU_1", "type": "text", "placeholder": "e.g., Sep 2016" },
    { "label": "END_DATE_EDU_1", "type": "text", "placeholder": "e.g., May 2020" },
    { "label": "DEGREE_1", "type": "text", "placeholder": "Enter your degree" },
    { "label": "UNIVERSITY_2", "type": "text", "placeholder": "Enter university name" },
    { "label": "START_DATE_EDU_2", "type": "text", "placeholder": "e.g., Sep 2012" },
    { "label": "END_DATE_EDU_2", "type": "text", "placeholder": "e.g., May 2016" },
    { "label": "DEGREE_2", "type": "text", "placeholder": "Enter your degree" }
],
"Creative_Sales_Resume": [
    { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
    { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
    { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
    { "label": "EMAIL", "type": "email", "placeholder": "Enter your email address" },
    { "label": "LINKEDIN", "type": "url", "placeholder": "Enter your LinkedIn profile URL" },
    { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website or portfolio URL" },
    { "label": "ABOUT_ME", "type": "textarea", "placeholder": "Enter a brief summary about yourself", "class": "full-width" },
    { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title for position 1" },
    { "label": "COMPANY_1", "type": "text", "placeholder": "Enter company name for position 1" },
    { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
    { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
    { "label": "RESPONSIBILITIES_1", "type": "textarea", "placeholder": "Enter responsibilities for position 1", "class": "full-width" },
    { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title for position 2" },
    { "label": "COMPANY_2", "type": "text", "placeholder": "Enter company name for position 2" },
    { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
    { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
    { "label": "RESPONSIBILITIES_2", "type": "textarea", "placeholder": "Enter responsibilities for position 2", "class": "full-width" },
    { "label": "DEGREE_1", "type": "text", "placeholder": "Enter your first degree (e.g., Bachelor of Science)" },
    { "label": "SCHOOL_1", "type": "text", "placeholder": "Enter school/university name for degree 1" },
    { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location for school 1" },
    { "label": "GRADUATION_DATE_1", "type": "text", "placeholder": "e.g., May 2020" },
    { "label": "EDUCATION_DETAIL_1", "type": "textarea", "placeholder": "Enter details about degree 1 (e.g., honors, GPA)", "class": "full-width" },
    { "label": "DEGREE_2", "type": "text", "placeholder": "Enter your second degree (optional)" },
    { "label": "SCHOOL_2", "type": "text", "placeholder": "Enter school/university name for degree 2 (optional)" },
    { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location for school 2 (optional)" },
    { "label": "GRADUATION_DATE_2", "type": "text", "placeholder": "e.g., May 2018" },
    { "label": "EDUCATION_DETAIL_2", "type": "textarea", "placeholder": "Enter details about degree 2 (e.g., honors, GPA)", "class": "full-width" },
    { "label": "SKILL_1", "type": "text", "placeholder": "Enter first skill", "class": "half-width" },
    { "label": "SKILL_2", "type": "text", "placeholder": "Enter second skill", "class": "half-width" },
    { "label": "SKILL_3", "type": "text", "placeholder": "Enter third skill", "class": "half-width" },
    { "label": "SKILL_4", "type": "text", "placeholder": "Enter fourth skill", "class": "half-width" },
    { "label": "SKILL_5", "type": "text", "placeholder": "Enter fifth skill", "class": "half-width" },
    { "label": "SKILL_6", "type": "text", "placeholder": "Enter sixth skill", "class": "half-width" },
    { "label": "ACTIVITIES_DESCRIPTION", "type": "textarea", "placeholder": "Describe your extracurricular activities or achievements", "class": "full-width" }
],
"Modern_Hospitality_Resume": [
    { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
    { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
    { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website or portfolio URL" },
    { "label": "EMAIL", "type": "email", "placeholder": "Enter your email address" },
    { "label": "PROFILE_SUMMARY", "type": "textarea", "placeholder": "Enter a brief professional summary", "class": "full-width" },
    { "label": "INTEREST_1", "type": "text", "placeholder": "Enter first interest or activity", "class": "half-width" },
    { "label": "INTEREST_2", "type": "text", "placeholder": "Enter second interest or activity", "class": "half-width" },
    { "label": "INTEREST_3", "type": "text", "placeholder": "Enter third interest or activity", "class": "half-width" },
    { "label": "INTEREST_4", "type": "text", "placeholder": "Enter fourth interest or activity", "class": "half-width" },
    { "label": "INTEREST_5", "type": "text", "placeholder": "Enter fifth interest or activity", "class": "half-width" },
    { "label": "INTEREST_6", "type": "text", "placeholder": "Enter sixth interest or activity", "class": "half-width" },
    { "label": "INTEREST_7", "type": "text", "placeholder": "Enter seventh interest or activity", "class": "half-width" },
    { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title for position 1" },
    { "label": "COMPANY_1", "type": "text", "placeholder": "Enter company name for position 1" },
    { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location for position 1" },
    { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
    { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
    { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter first responsibility for position 1", "class": "full-width" },
    { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter second responsibility for position 1", "class": "full-width" },
    { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter third responsibility for position 1", "class": "full-width" },
    { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title for position 2" },
    { "label": "COMPANY_2", "type": "text", "placeholder": "Enter company name for position 2" },
    { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location for position 2" },
    { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
    { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
    { "label": "RESPONSIBILITY_4", "type": "textarea", "placeholder": "Enter first responsibility for position 2", "class": "full-width" },
    { "label": "RESPONSIBILITY_5", "type": "textarea", "placeholder": "Enter second responsibility for position 2", "class": "full-width" },
    { "label": "RESPONSIBILITY_6", "type": "textarea", "placeholder": "Enter third responsibility for position 2", "class": "full-width" },
    { "label": "SKILL_1", "type": "text", "placeholder": "Enter first skill", "class": "half-width" },
    { "label": "SKILL_2", "type": "text", "placeholder": "Enter second skill", "class": "half-width" },
    { "label": "SKILL_3", "type": "text", "placeholder": "Enter third skill", "class": "half-width" },
    { "label": "SKILL_4", "type": "text", "placeholder": "Enter fourth skill", "class": "half-width" },
    { "label": "SKILL_5", "type": "text", "placeholder": "Enter fifth skill", "class": "half-width" },
    { "label": "SKILL_6", "type": "text", "placeholder": "Enter sixth skill", "class": "half-width" },
    { "label": "SKILL_7", "type": "text", "placeholder": "Enter seventh skill", "class": "half-width" },
    { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree (e.g., Bachelor of Science)" },
    { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
    { "label": "GRADUATION_DATE", "type": "text", "placeholder": "e.g., May 2020" }
],
"Creative_Teaching_Resume": [
    { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
    { "label": "CAREER_OBJECTIVE", "type": "textarea", "placeholder": "Enter your career objective or professional goal", "class": "full-width" },
    { "label": "SKILL_1", "type": "text", "placeholder": "Enter first skill", "class": "half-width" },
    { "label": "SKILL_2", "type": "text", "placeholder": "Enter second skill", "class": "half-width" },
    { "label": "SKILL_3", "type": "text", "placeholder": "Enter third skill", "class": "half-width" },
    { "label": "SKILL_4", "type": "text", "placeholder": "Enter fourth skill", "class": "half-width" },
    { "label": "SKILL_5", "type": "text", "placeholder": "Enter fifth skill", "class": "half-width" },
    { "label": "SKILL_6", "type": "text", "placeholder": "Enter sixth skill", "class": "half-width" },
    { "label": "SKILL_7", "type": "text", "placeholder": "Enter seventh skill", "class": "half-width" },
    { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
    { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
    { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
    { "label": "EMAIL", "type": "email", "placeholder": "Enter your email address" },
    { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website or portfolio URL" },
    { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
    { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
    { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title for position 1" },
    { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name for position 1" },
    { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location for position 1" },
    { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
    { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
    { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title for position 2" },
    { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name for position 2" },
    { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location for position 2" },
    { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
    { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
    { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title for position 3" },
    { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter company name for position 3" },
    { "label": "LOCATION_3", "type": "text", "placeholder": "Enter location for position 3" },
    { "label": "KEY_RESPONSIBILITIES", "type": "textarea", "placeholder": "Enter key responsibilities across your experience", "class": "full-width" },
    { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
    { "label": "CITY_STATE", "type": "text", "placeholder": "Enter city and state of university" },
    { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree (e.g., Bachelor of Science)" },
    { "label": "COMMUNICATION_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Describe your communication skills", "class": "full-width" },
    { "label": "LEADERSHIP_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Describe your leadership skills", "class": "full-width" },
    { "label": "REFERENCES", "type": "textarea", "placeholder": "Enter reference details (e.g., name, title, contact info)", "class": "full-width" }
],
"Geometric_Resume": [
    { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
    { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
    { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
    { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
    { "label": "EMAIL", "type": "email", "placeholder": "Enter your email address" },
    { "label": "Profile Summary", "type": "textarea", "placeholder": "Enter a brief professional summary", "class": "full-width" },
    { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
    { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
    { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title for position 1" },
    { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name for position 1" },
    { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter key responsibility for position 1", "class": "full-width" },
    { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
    { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
    { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title for position 2" },
    { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name for position 2" },
    { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter key responsibility for position 2", "class": "full-width" },
    { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
    { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
    { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title for position 3" },
    { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter company name for position 3" },
    { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter key responsibility for position 3", "class": "full-width" },
    { "label": "START_DATE_EDU_1", "type": "text", "placeholder": "e.g., Sep 2012" },
    { "label": "END_DATE_EDU_1", "type": "text", "placeholder": "e.g., May 2016" },
    { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree (e.g., Bachelor of Science)" },
    { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
    { "label": "SKILL_1", "type": "text", "placeholder": "Enter first skill", "class": "half-width" },
    { "label": "SKILL_2", "type": "text", "placeholder": "Enter second skill", "class": "half-width" },
    { "label": "SKILL_3", "type": "text", "placeholder": "Enter third skill", "class": "half-width" },
    { "label": "SKILL_4", "type": "text", "placeholder": "Enter fourth skill", "class": "half-width" },
    { "label": "SKILL_5", "type": "text", "placeholder": "Enter fifth skill", "class": "half-width" }
],
"Swiss_Design_Resume": [
        { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
        { "label": "JOB_TITLE", "type": "text", "placeholder": "Enter your desired job title" },
        { "label": "CAREER_OBJECTIVE", "type": "textarea", "placeholder": "Enter your career objective", "class": "full-width" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
        { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter responsibilities for first job", "class": "full-width" },
        { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
        { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
        { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name" },
        { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter responsibilities for second job", "class": "full-width" },
        { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
        { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
        { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter company name" },
        { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter responsibilities for third job", "class": "full-width" },
        { "label": "Start Date", "type": "text", "placeholder": "e.g., Sep 2016" },
        { "label": "End Date", "type": "text", "placeholder": "e.g., May 2020" },
        { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree" },
        { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
        { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_4", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_5", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "INTERESTS_DESCRIPTION", "type": "textarea", "placeholder": "Enter your interests", "class": "full-width" },
        { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
        { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
        { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
        { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" }
    ],
    "Modern_Florist_Resume": [
        
        { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
        { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
        { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
        { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
        { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
        { "label": "CAREER_OBJECTIVE", "type": "textarea", "placeholder": "Enter your career objective", "class": "full-width" },
        { "label": "SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Enter your skills and abilities", "class": "full-width" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter responsibilities", "class": "full-width" },
        { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
        { "label": "START_DATE_EDU_1", "type": "text", "placeholder": "e.g., Sep 2016" },
        { "label": "END_DATE_EDU_1", "type": "text", "placeholder": "e.g., May 2020" },
        { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree" },
        { "label": "COMMUNICATION_DETAILS", "type": "textarea", "placeholder": "Enter communication skills or details", "class": "full-width" },
        { "label": "LEADERSHIP_DETAILS", "type": "textarea", "placeholder": "Enter leadership experience or details", "class": "full-width" },
        { "label": "REFERENCE_NAME_1", "type": "text", "placeholder": "Enter first reference name" },
        { "label": "COMPANY_1", "type": "text", "placeholder": "Enter first reference company" },
        { "label": "PHONE_NUMBER_1", "type": "tel", "placeholder": "e.g., 98765-43210" },
        { "label": "REFERENCE_NAME_2", "type": "text", "placeholder": "Enter second reference name" },
        { "label": "COMPANY_2", "type": "text", "placeholder": "Enter second reference company" },
        { "label": "PHONE_NUMBER_2", "type": "tel", "placeholder": "e.g., 98765-43210" }
    ],
        "Color_Block_Resume": [
            // Header
            { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
            { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter your first job title" },
            { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter your second job title" },
            { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter your third job title" },
    
            { "label": "PROFILE_SUMMARY", "type": "textarea", "placeholder": "Enter your profile summary", "class": "full-width" },

            { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
            { "label": "SOCIAL_HANDLE", "type": "text", "placeholder": "Enter your social media handle (e.g., @username)" },
            { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
            { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website" },
            { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter first company name" },
            { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
            { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
            { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter responsibilities for first job", "class": "full-width" },
    
            { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter second company name" },
            { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
            { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
            { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter responsibilities for second job", "class": "full-width" },
    
            { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter third company name" },
            { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
            { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
            { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter responsibilities for third job", "class": "full-width" },
            { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_4", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_5", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_6", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_7", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "UNIVERSITY_1", "type": "text", "placeholder": "Enter first university name" },
            { "label": "START_DATE_EDU_1", "type": "text", "placeholder": "e.g., Sep 2016" },
            { "label": "END_DATE_EDU_1", "type": "text", "placeholder": "e.g., May 2020" },
            { "label": "DEGREE_1", "type": "text", "placeholder": "Enter your first degree" },
            { "label": "UNIVERSITY_2", "type": "text", "placeholder": "Enter second university name" },
            { "label": "START_DATE_EDU_2", "type": "text", "placeholder": "e.g., Sep 2012" },
            { "label": "END_DATE_EDU_2", "type": "text", "placeholder": "e.g., May 2016" },
            { "label": "DEGREE_2", "type": "text", "placeholder": "Enter your second degree" }
        ],
        "Industry_Manager_Resume": [
        { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
        { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
        { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
        { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 987-654-3210 or +1-987-654-3210" },
        { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
        { "label": "LINKEDIN", "type": "url", "placeholder": "Enter your LinkedIn URL" },
        { "label": "PROFILE_SUMMARY", "type": "textarea", "placeholder": "Enter a brief professional summary", "class": "full-width" },
        { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name" },
        { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
        { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
        { "label": "RESPONSIBILITY_4", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "RESPONSIBILITY_5", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "RESPONSIBILITY_6", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "DEGREE_1", "type": "text", "placeholder": "Enter your degree (e.g., MBA, B.S. in Management)" },
        { "label": "GRADUATION_DATE_1", "type": "text", "placeholder": "e.g., May 2015" },
        { "label": "UNIVERSITY_NAME_1", "type": "text", "placeholder": "Enter university name" },
        { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location (e.g., City, State)" },
        { "label": "DEGREE_2", "type": "text", "placeholder": "Enter your degree (optional)" },
        { "label": "GRADUATION_DATE_2", "type": "text", "placeholder": "e.g., May 2012" },
        { "label": "UNIVERSITY_NAME_2", "type": "text", "placeholder": "Enter university name (optional)" },
        { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location (e.g., City, State)" },
        { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill (e.g., Project Management)", "class": "half-width" },
        { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill (e.g., Strategic Planning)", "class": "half-width" },
        { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill (e.g., Team Leadership)", "class": "half-width" },
        { "label": "SKILL_4", "type": "text", "placeholder": "Enter skill (e.g., Budgeting)", "class": "half-width" },
        { "label": "SKILL_5", "type": "text", "placeholder": "Enter skill (e.g., Data Analysis)", "class": "half-width" },
        { "label": "SKILL_6", "type": "text", "placeholder": "Enter skill (e.g., Negotiation)", "class": "half-width" },
        { "label": "INTERESTS_DESCRIPTION", "type": "textarea", "placeholder": "Enter activities and interests (e.g., Volunteer Work, Industry Conferences)", "class": "full-width" }
    ],
    "Stylish_Sales_Resume": [
        { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
        { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
        { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
        { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 987-654-3210 or +1-987-654-3210" },
        { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
        { "label": "LINKEDIN", "type": "url", "placeholder": "Enter your LinkedIn URL" },
        { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website URL" },
        { "label": "ABOUT_ME", "type": "textarea", "placeholder": "Enter a brief summary about yourself", "class": "full-width" },
        { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name" },
        { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
        { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
        { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "DEGREE_1", "type": "text", "placeholder": "Enter your degree (e.g., B.S. in Business)" },
        { "label": "UNIVERSITY_1", "type": "text", "placeholder": "Enter university name" },
        { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location (e.g., City, State)" },
        { "label": "GRADUATION_DATE_1", "type": "text", "placeholder": "e.g., May 2015" },
        { "label": "EDUCATION_DESCRIPTION_1", "type": "textarea", "placeholder": "Enter relevant details (e.g., honors, coursework)", "class": "full-width" },
        { "label": "DEGREE_2", "type": "text", "placeholder": "Enter your degree (e.g., M.S. in Management)" },
        { "label": "UNIVERSITY_NAME_2", "type": "text", "placeholder": "Enter university name" },
        { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location (e.g., City, State)" },
        { "label": "GRADUATION_DATE_2", "type": "text", "placeholder": "e.g., May 2012" },
        { "label": "EDUCATION_DESCRIPTION_2", "type": "textarea", "placeholder": "Enter relevant details (e.g., honors, coursework)", "class": "full-width" },
        { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill (e.g., Leadership)", "class": "third-width" },
        { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill (e.g., Communication)", "class": "third-width" },
        { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill (e.g., Problem Solving)", "class": "third-width" },
        { "label": "SKILL_4", "type": "text", "placeholder": "Enter skill (e.g., Time Management)", "class": "third-width" },
        { "label": "SKILL_5", "type": "text", "placeholder": "Enter skill (e.g., Technical Proficiency)", "class": "third-width" },
        { "label": "SKILL_6", "type": "text", "placeholder": "Enter skill (e.g., Collaboration)", "class": "third-width" },
        { "label": "ACTIVITIES_DESCRIPTION", "type": "textarea", "placeholder": "Enter activities (e.g., volunteer work, hobbies)", "class": "full-width" }
    ],
    "Bold_Attorney": [
        { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
        { "label": "JOB_TITLE", "type": "text", "placeholder": "Enter your current or desired job title" },
        { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
        { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
        { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 987-654-3210 or +1-987-654-3210" },
        { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
        { "label": "PROFILE_SUMMARY", "type": "textarea", "placeholder": "Enter a brief professional summary", "class": "full-width" },
        { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name" },
        { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location (e.g., City, State)" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter key responsibility or description", "class": "full-width" },
        
        { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name" },
        { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location (e.g., City, State)" },
        { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
        { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
        { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter key responsibility or description", "class": "full-width" },
        { "label": "DEGREE_1", "type": "text", "placeholder": "Enter your degree (e.g., B.A. in Economics)" },
        { "label": "UNIVERSITY_NAME_1", "type": "text", "placeholder": "Enter university name" },
        { "label": "CITY_STATE_1", "type": "text", "placeholder": "Enter city, state" },
        { "label": "GRADUATION_DATE_1", "type": "text", "placeholder": "e.g., May 2016" },
        { "label": "EDUCATION_DETAIL_1", "type": "textarea", "placeholder": "Enter relevant details (e.g., honors, GPA)", "class": "full-width" },
        { "label": "DEGREE_2", "type": "text", "placeholder": "Enter your degree (e.g., M.S. in Management)" },
        { "label": "UNIVERSITY_NAME_2", "type": "text", "placeholder": "Enter university name" },
        { "label": "CITY_STATE_2", "type": "text", "placeholder": "Enter city, state" },
        { "label": "GRADUATION_DATE_2", "type": "text", "placeholder": "e.g., May 2013" },
        { "label": "EDUCATION_DETAIL_2", "type": "textarea", "placeholder": "Enter relevant details (e.g., honors, GPA)", "class": "full-width" },
        { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill (e.g., Project Management)", "class": "half-width" },
        { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill (e.g., Data Analysis)", "class": "half-width" },
        { "label": "INTEREST_1", "type": "text", "placeholder": "Enter interest (e.g., Technology Trends)", "class": "half-width" },
        { "label": "INTEREST_2", "type": "text", "placeholder": "Enter interest (e.g., Networking Events)", "class": "half-width" }
    ],
    "Classic_Management_Resume": [
        { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
        { "label": "JOB_TITLE", "type": "text", "placeholder": "Enter your current or desired job title" },
        { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 987-654-3210 or +1-987-654-3210" },
        { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
        { "label": "LOCATION", "type": "text", "placeholder": "Enter your location (e.g., City, State)" },
        { "label": "CAREER_OBJECTIVE", "type": "textarea", "placeholder": "Enter your career objective", "class": "full-width" },
        { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
        { "label": "LOCATION", "type": "text", "placeholder": "Enter location (e.g., City, State)" },
        { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree (e.g., B.S. in Engineering)" },
        { "label": "GPA", "type": "text", "placeholder": "e.g., 3.7" },
        { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill (e.g., Problem Solving)", "class": "third-width" },
        { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill (e.g., Team Collaboration)", "class": "third-width" },
        { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill (e.g., Data Analysis)", "class": "third-width" },
        { "label": "SKILL_4", "type": "text", "placeholder": "Enter skill (e.g., Project Management)", "class": "third-width" },
        { "label": "SKILL_5", "type": "text", "placeholder": "Enter skill (e.g., Technical Writing)", "class": "third-width" },
        { "label": "EXPERIENCE", "type": "textarea", "placeholder": "Enter a general experience summary (optional)", "class": "full-width" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2021" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2023 or Present" },
        { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2019" },
        { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2020" },
        { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name" },
        { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "RESPONSIBILITY_4", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2017" },
        { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2018" },
        { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title" },
        { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter company name" },
        { "label": "RESPONSIBILITY_5", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "RESPONSIBILITY_6", "type": "textarea", "placeholder": "Enter key responsibility or achievement", "class": "full-width" },
        { "label": "COMMUNICATION_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Describe your communication skills", "class": "full-width" },
        { "label": "LEADERSHIP_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Describe your leadership skills", "class": "full-width" },
        { "label": "REFERENCES", "type": "textarea", "placeholder": "Enter references or 'Available upon request'", "class": "full-width" }
    ],

        "Modern_Bold_Sales_Resume": [
            // Header
            { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
            { "label": "JOB_TITLE", "type": "text", "placeholder": "Enter your desired job title" },
    
            // Objective Section
            { "label": "CAREER_OBJECTIVE", "type": "textarea", "placeholder": "Enter your career objective", "class": "full-width" },
    
            // Experience Section (three entries)
            { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter first job title" },
            { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter first company name" },
            { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
            { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
            { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter responsibilities for first job", "class": "full-width" },
    
            { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter second job title" },
            { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter second company name" },
            { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
            { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
            { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter responsibilities for second job", "class": "full-width" },
    
            { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter third job title" },
            { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter third company name" },
            { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
            { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
            { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter responsibilities for third job", "class": "full-width" },
    
            // Skills Section (up to 5 skills)
            { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_4", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
            { "label": "SKILL_5", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
    
            // Education Section (two entries + certification)
            { "label": "DEGREE_1", "type": "text", "placeholder": "Enter your first degree" },
            { "label": "UNIVERSITY_1", "type": "text", "placeholder": "Enter first university name" },
            { "label": "START_DATE_EDU_1", "type": "text", "placeholder": "e.g., Sep 2016" },
            { "label": "END_DATE_EDU_1", "type": "text", "placeholder": "e.g., May 2020" },
            { "label": "EDUCATION_DETAILS_1", "type": "textarea", "placeholder": "Enter details for first education (e.g., GPA, honors)", "class": "full-width" },
    
            { "label": "DEGREE_2", "type": "text", "placeholder": "Enter your second degree" },
            { "label": "UNIVERSITY_NAME_2", "type": "text", "placeholder": "Enter second university name" },
            { "label": "START_DATE_EDU_2", "type": "text", "placeholder": "e.g., Sep 2012" },
            { "label": "END_DATE_EDU_2", "type": "text", "placeholder": "e.g., May 2016" },
            { "label": "EDUCATION_DETAILS_2", "type": "textarea", "placeholder": "Enter details for second education", "class": "full-width" },
    
            { "label": "CERTIFICATION", "type": "text", "placeholder": "Enter certification name" },
            { "label": "INSTITUTION", "type": "text", "placeholder": "Enter institution name" },
            { "label": "START_DATE_CERT", "type": "text", "placeholder": "e.g., Jan 2023" },
            { "label": "END_DATE_CERT", "type": "text", "placeholder": "e.g., Mar 2023" },
            { "label": "CERTIFICATION_DETAILS", "type": "textarea", "placeholder": "Enter certification details", "class": "full-width" },
    
            // Contact Section
            { "label": "LOCATION", "type": "text", "placeholder": "Enter your location" },
            { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
            { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
            { "label": "LINKEDIN", "type": "url", "placeholder": "Enter your LinkedIn URL" },
            { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website" }
        ],
        "Paralegal_Resume": [
        // Header
        { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
        { "label": "JOB_TITLE", "type": "text", "placeholder": "Enter your desired job title" },

        // Contact Section
        { "label": "LOCATION", "type": "text", "placeholder": "Enter your location" },
        { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
        { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
        { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website" },

        // Profile Section
        { "label": "PROFILE_SUMMARY", "type": "textarea", "placeholder": "Enter your profile summary", "class": "full-width" },

        // Experience Section (two entries)
        { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter first job title" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter first company name" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter first responsibility for first job", "class": "full-width" },
        { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter second responsibility for first job", "class": "full-width" },
        { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter third responsibility for first job", "class": "full-width" },
        { "label": "RESPONSIBILITY_4", "type": "textarea", "placeholder": "Enter fourth responsibility for first job", "class": "full-width" },

        { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter second job title" },
        { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter second company name" },
        { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
        { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
        { "label": "RESPONSIBILITY_5", "type": "textarea", "placeholder": "Enter first responsibility for second job", "class": "full-width" },
        { "label": "RESPONSIBILITY_6", "type": "textarea", "placeholder": "Enter second responsibility for second job", "class": "full-width" },
        { "label": "RESPONSIBILITY_7", "type": "textarea", "placeholder": "Enter third responsibility for second job", "class": "full-width" },

        // Education Section (two entries)
        { "label": "UNIVERSITY_1", "type": "text", "placeholder": "Enter first university name" },
        { "label": "GRADUATION_DATE_1", "type": "text", "placeholder": "e.g., May 2020" },
        { "label": "DEGREE_1", "type": "text", "placeholder": "Enter your first degree" },

        { "label": "UNIVERSITY_NAME_2", "type": "text", "placeholder": "Enter second university name" },
        { "label": "GRADUATION_DATE_2", "type": "text", "placeholder": "e.g., May 2016" },
        { "label": "DEGREE_2", "type": "text", "placeholder": "Enter your second degree" },

        // Key Skills and Characteristics Section (up to 7 skills)
        { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_4", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_5", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_6", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_7", "type": "text", "placeholder": "Enter skill", "class": "half-width" }
    ],
    "CV_Resume": [
        // Header/Contact Section
        { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
        { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
        { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
        { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
        { "label": "EMAIL", "type": "email", "placeholder": "Enter your email" },
        { "label": "CAREER_OBJECTIVE", "type": "textarea", "placeholder": "Enter your career objective", "class": "full-width" },

        // Skills & Abilities Section
        { "label": "SKILL_1", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_2", "type": "text", "placeholder": "Enter skill", "class": "half-width" },
        { "label": "SKILL_3", "type": "text", "placeholder": "Enter skill", "class": "half-width" },

        // Education Section (single entry)
        { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
        { "label": "START_DATE_EDU", "type": "text", "placeholder": "e.g., Sep 2016" },
        { "label": "END_DATE_EDU", "type": "text", "placeholder": "e.g., May 2020" },
        { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree" },
        { "label": "GPA", "type": "text", "placeholder": "e.g., 3.8" },
        { "label": "COURSES", "type": "textarea", "placeholder": "Enter relevant courses (e.g., Data Structures, Calculus)", "class": "full-width" },

        // Communication Section
        { "label": "COMMUNICATION_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Enter communication skills description", "class": "full-width" },

        // Leadership Section
        { "label": "LEADERSHIP_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Enter leadership skills description", "class": "full-width" },

        // Experience Section (three entries)
        { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter first job title" },
        { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter first company name" },
        { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
        { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022" },
        { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter responsibility for first job", "class": "full-width" },

        { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter second job title" },
        { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter second company name" },
        { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
        { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
        { "label": "RESPONSIBILITY_2", "type": "textarea", "placeholder": "Enter responsibility for second job", "class": "full-width" },

        { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter third job title" },
        { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter third company name" },
        { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
        { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
        { "label": "RESPONSIBILITY_3", "type": "textarea", "placeholder": "Enter responsibility for third job", "class": "full-width" }
    ],
    "Stylish_Teaching_Resume": [
    { "label": "FULL_NAME", "type": "text", "placeholder": "Enter your full name" },
    { "label": "CAREER_OBJECTIVE", "type": "textarea", "placeholder": "Enter your career objective or professional goal", "class": "full-width" },
    { "label": "REFRENCES", "type": "textarea", "placeholder": "Enter reference details (e.g., name, title, contact info)", "class": "full-width" },
    { "label": "ADDRESS", "type": "text", "placeholder": "Enter your address" },
    { "label": "CITY_STATE_ZIP", "type": "text", "placeholder": "Enter city, state, zip" },
    { "label": "PHONE_NUMBER", "type": "tel", "placeholder": "e.g., 98765-43210 or +919876543210" },
    { "label": "EMAIL", "type": "email", "placeholder": "Enter your email address" },
    { "label": "WEBSITE", "type": "url", "placeholder": "Enter your website or portfolio URL" },
    { "label": "START_DATE_1", "type": "text", "placeholder": "e.g., Jan 2020" },
    { "label": "END_DATE_1", "type": "text", "placeholder": "e.g., Dec 2022 or Present" },
    { "label": "JOB_TITLE_1", "type": "text", "placeholder": "Enter job title for position 1" },
    { "label": "COMPANY_NAME_1", "type": "text", "placeholder": "Enter company name for position 1" },
    { "label": "LOCATION_1", "type": "text", "placeholder": "Enter location for position 1" },
    { "label": "START_DATE_2", "type": "text", "placeholder": "e.g., Jan 2018" },
    { "label": "END_DATE_2", "type": "text", "placeholder": "e.g., Dec 2019" },
    { "label": "JOB_TITLE_2", "type": "text", "placeholder": "Enter job title for position 2" },
    { "label": "COMPANY_NAME_2", "type": "text", "placeholder": "Enter company name for position 2" },
    { "label": "LOCATION_2", "type": "text", "placeholder": "Enter location for position 2" },
    { "label": "START_DATE_3", "type": "text", "placeholder": "e.g., Jan 2016" },
    { "label": "END_DATE_3", "type": "text", "placeholder": "e.g., Dec 2017" },
    { "label": "JOB_TITLE_3", "type": "text", "placeholder": "Enter job title for position 3" },
    { "label": "COMPANY_NAME_3", "type": "text", "placeholder": "Enter company name for position 3" },
    { "label": "LOCATION_3", "type": "text", "placeholder": "Enter location for position 3" },
    { "label": "RESPONSIBILITY_1", "type": "textarea", "placeholder": "Enter key responsibility across your experience", "class": "full-width" },
    { "label": "UNIVERSITY_NAME", "type": "text", "placeholder": "Enter university name" },
    { "label": "CITY_STATE", "type": "text", "placeholder": "Enter city and state of university" },
    { "label": "DEGREE", "type": "text", "placeholder": "Enter your degree (e.g., Bachelor of Science)" },
    { "label": "COMMUNICATION_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Describe your communication skills", "class": "full-width" },
    { "label": "LEADERSHIP_SKILLS_DESCRIPTION", "type": "textarea", "placeholder": "Describe your leadership skills", "class": "full-width" }
]
    
};

const sectionDefinitions = {
    Contact: ["FULL_NAME", "ADDRESS", "CITY_STATE_ZIP", "PHONE_NUMBER","JOB_TITLE", "EMAIL","SOCIAL_HANDLE", "WEBSITE", "Name", "Address", "Phone", "Email","LOCATION","LINKEDIN"],
    Experience: ["START_DATE_1", "END_DATE_1", "JOB_TITLE_1", "COMPANY_NAME_1", "LOCATION_1", "RESPONSIBILITY_1",
                 "START_DATE_2", "END_DATE_2", "JOB_TITLE_2", "COMPANY_NAME_2", "LOCATION_2", "RESPONSIBILITY_2",
                 "START_DATE_3", "END_DATE_3", "JOB_TITLE_3", "COMPANY_NAME_3", "LOCATION_3", "RESPONSIBILITY_3","ACHIEVEMENTS",
                 "START_DATE_4", "END_DATE_4", "JOB_TITLE_4", "COMPANY_NAME_4", "LOCATION_4", "RESPONSIBILITY_4","KEY_RESPONSIBILITIES","RESPONSIBILITY","EXPERIENCE",
                 "RESPONSIBILITY_5","RESPONSIBILITY_6","RESPONSIBILITY_7","RESPONSIBILITY_8","RESPONSIBILITIES_1","RESPONSIBILITIES_2","RESPONSIBILITY_9","EXPERIENCE_DESCRIPTION","DEPARTMENT_1","DEPARTMENT_2","DEPARTMENT_3","COMPANY_1","COMPANY_2","COMPANY_3",

                 "Start Date", "End Date", "Company", "Location", "Job Responsibilities"],
    Education: ["UNIVERSITY_NAME", "DEGREE","DEGREE_1","DEGREE_2","DEGREE_3" ,"GRADUATION_DATE", "ACADEMIC_ACHIEVEMENT", "RELEVANT_COURSEWORK", "GPA","UNIVERSITY_1","UNIVERSITY_2","UNIVERSITY_3","SCHOOL_1","SCHOOL_2","LOCATION_1","LOCATION_2","GRADUATION_DATE_1","GRADUATION_DATE_2",
                 "EDUCATION_DETAIL_1","EDUCATION_DESCRIPTION_1","COURSES","EDUCATION_DETAILS_1","EDUCATION_DETAILS_2","EDUCATION_DESCRIPTION_2","EDUCATION_DETAIL_2","CITY_STATE",
                "Graduation Year","START_DATE_EDU_1","CITY_STATE_1","CITY_STATE_2","END_DATE_EDU_1","START_DATE_EDU_2","END_DATE_EDU_2","START_DATE_EDU_3","END_DATE_EDU_3", "Degree", "University","UNIVERSITY_NAME_1","UNIVERSITY_NAME_2","Location","honor_society"],
    Certifications: ["START_DATE_CERT","END_DATE_CERT","CERTIFICATION_DETAILS"],
    Skills: ["SKILL_1","SKILLS_DESCRIPTION", "SKILL_2", "SKILL_3", "SKILL_4", "SKILL_5", "SKILL_6","SKILL_7", "Skills","COMMUNICATION_SKILLS_DESCRIPTION","LEADERSHIP_SKILLS_DESCRIPTION","COMMUNICATION_DETAILS","LEADERSHIP_DETAILS"],
    Summary: ["PROFESSIONAL_SUMMARY", "Profile Summary","ABOUT_ME","OBJECTIVE_STATEMENT","PROFILE_SUMMARY","CAREER_OBJECTIVE"],
    Achievements:["achievement_1","achievement_2","achievement_3"],
    References: ["REFERENCE_DETAILS","COMPANY_1","COMPANY_2","REFERENCES","REFERENCE_NAME_1","REFERENCE_NAME_2","PHONE_NUMBER_1","PHONE_NUMBER_2","REFRENCES"],
    Activities:["ACTIVITIES_DESCRIPTION","INTEREST_1","INTEREST_2","INTEREST_3","INTEREST_4","INTEREST_5","INTEREST_6","INTEREST_7","INTERESTS_DESCRIPTION"],
    Finalize: []
};

// Tips for each section
const sectionTips = {
    Contact: ["It’s best to use a professional email. One that includes your full name is best.", "Gmail is the preferred email client. Addresses from Yahoo or Hotmail tend to look outdated."],
    Experience: ["Highlight experience relevant to the position you want or are applying for.", "Use keywords from the job listing."],
    Education: ["List your most recent education first.", "Include relevant coursework or achievements if you’re a recent graduate."],
    Certifications: ["Only include certifications that are relevant to the job.", "Mention the issuing institution and dates for credibility."],
    Skills: ["Focus on skills that match the job description.", "Include both hard and soft skills."],
    Summary: ["Keep your summary concise, ideally 2-3 sentences.", "Highlight your key strengths and career goals."],
    References: ["Only include references if the job posting specifically requests them.", "Ensure your references are aware they may be contacted."],
    Finalize: ["Review your entries before downloading.", "Ensure all required fields are filled."]
};

// Global variables
let selectedTemplate;
let allFormData = {};

// Function to save form data to localStorage
function saveFormData() {
    localStorage.setItem('formData', JSON.stringify(allFormData));
    console.log('Saving form data:', allFormData);
}

// Function to load form data from localStorage
function loadFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        allFormData = JSON.parse(savedData);
        console.log("Loaded form data:", allFormData);
    } else {
        console.log("No saved data found in localStorage.");
    }
    const chatbotSummary = localStorage.getItem('chatbotSummary');
    if (chatbotSummary && selectedTemplate) {
        const summaryField = Object.keys(allFormData).find(key => 
            sectionDefinitions.Summary.map(s => s.toLowerCase()).includes(key.toLowerCase()) && 
            templates[selectedTemplate].some(f => f.label.toLowerCase() === key.toLowerCase())
        ) || sectionDefinitions.Summary.find(field => templates[selectedTemplate].some(f => f.label === field));
        if (summaryField) {
            allFormData[summaryField] = (allFormData[summaryField] || '') + '\n' + chatbotSummary;
            console.log(`Appended chatbot summary to ${summaryField}:`, allFormData[summaryField]);
            saveFormData();
        }
        localStorage.removeItem('chatbotSummary');
    }
}

// Function to generate dynamic sidebar based on template
function generateDynamicSidebar(template) {
    const sidebar = document.getElementById('dynamicSidebar');
    if (!sidebar) {
        console.error("Sidebar not found!");
        return;
    }
    sidebar.innerHTML = ''; // Clear existing items

    const activeSections = determineActiveSections(template);
    activeSections.forEach((section, index) => {
        const li = document.createElement('li');
        li.textContent = section;
        const iconMap = {
            Contact: '👤', Experience: '🛠️', Education: '📚', Certifications: '🏆',
            Skills: '🛠️', Summary: '📝', References: '👥', Finalize: '✅'
        };
        li.innerHTML = `<span class="icon">${iconMap[section] || ''}</span> ${section}`;
        if (index === 0) li.classList.add('active');
        li.addEventListener('click', () => {
            document.querySelectorAll('.sidebar nav ul li').forEach(li => li.classList.remove('active'));
            li.classList.add('active');
            generateSectionFields(section, template, document.getElementById('resumeForm'));
        });
        sidebar.appendChild(li);
    });
}

// Function to determine active sections based on template fields
function determineActiveSections(template) {
    const fields = templates[template].map(f => f.label);
    const activeSections = {};
    Object.keys(sectionDefinitions).forEach(section => {
        const sectionFields = sectionDefinitions[section];
        if (sectionFields.some(field => fields.includes(field)) || section === "Finalize") {
            activeSections[section] = true;
        }
    });
    return Object.keys(activeSections);
}

// Function to generate form fields for a specific section
function generateSectionFields(section, template, form) {
    if (!form) {
        console.error("Form element not found!");
        return;
    }
    form.innerHTML = ''; // Clear existing fields

    if (section === "Finalize") {
        form.innerHTML = `
            <h1>Finalize</h1>
            <p>Your resume is ready! Click the button below to download it.</p>
            <button type="button" class="download-btn" onclick="downloadResume()">Download Resume</button>
        `;
        updateTips(section);
        return;
    }

    const sectionFields = sectionDefinitions[section].filter(field => 
        templates[template].some(f => f.label === field)
    );
    if (sectionFields.length === 0) {
        form.innerHTML = `<h1>${section}</h1><p>No fields available for this section in the selected template.</p>`;
        updateTips(section);
        return;
    }

    const header = document.createElement("h1");
    header.textContent = section;
    form.appendChild(header);

    const description = document.createElement("p");
    description.textContent = getSectionDescription(section);
    form.appendChild(description);

    sectionFields.forEach(field => {
        const templateField = templates[template].find(f => f.label === field);
        createFormField(templateField, form);
    });

    const navDiv = document.createElement("div");
    navDiv.className = "form-group";
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.type = "button";
    backBtn.onclick = () => navigateToPreviousSection(section);
    const continueBtn = document.createElement("button");
    continueBtn.textContent = "Continue";
    continueBtn.type = "button";
    continueBtn.onclick = () => navigateToNextSection(section);
    navDiv.appendChild(backBtn);
    navDiv.appendChild(continueBtn);
    form.appendChild(navDiv);

    updateTips(section);
}

// Function to get section description
function getSectionDescription(section) {
    const descriptions = {
        Contact: "Let’s start with the basics. Input at least your name, email, and phone number.",
        Experience: "Start with your most recent job.",
        Education: "List your most recent education first.",
        Certifications: "Add relevant certifications.",
        Skills: "Include skills relevant to your desired role.",
        Summary: "Write a concise summary of your career goals.",
        References: "Add references if requested."
    };
    return descriptions[section] || "Please fill out the details for this section.";
}

// Function to create a dynamic form field using template properties
function createFormField(templateField, form) {
    if (!templateField) {
        console.warn("Template field not found!");
        return;
    }

    const div = document.createElement("div");
    div.className = "form-group";

    const label = document.createElement("label");
    label.textContent = templateField.label.replace(/_/g, " ");
    label.setAttribute("for", templateField.label);

    let input;
    if (templateField.type === "textarea") {
        input = document.createElement("textarea");
        input.placeholder = templateField.placeholder;
        input.className = templateField.class || "full-width";
    } else if (templateField.label.includes("DATE")) {
        input = document.createElement("select");
        input.innerHTML = `<option value="">Select ${templateField.label.replace(/_/g, " ")}</option>`;
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= 1980; year--) {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            input.appendChild(option);
        }
        input.className = "half-width";
    } else {
        input = document.createElement("input");
        input.type = templateField.type;
        input.placeholder = templateField.placeholder;
        input.className = templateField.class || "full-width";

        // Strict 10-digit constraint for phone number field
        if (templateField.type === "tel" && templateField.label.toLowerCase().includes("phone")) {
            // HTML5 attributes for validation
            input.pattern = "^[6-9][0-9]{9}$"; // Exactly 10 digits, starting with 6-9
            input.maxLength = 10; // Restrict to exactly 10 characters
            input.minLength = 10; // Ensure exactly 10 characters
            input.required = true; // Make it mandatory
            input.title = "Enter a 10-digit Indian mobile number (e.g., 9876543210)";
            input.placeholder = "e.g., 9876543210";

            // Real-time validation feedback
            input.addEventListener("input", (e) => {
                const value = e.target.value;
                const regex = /^[6-9][0-9]{9}$/;
                if (value && !regex.test(value)) {
                    input.setCustomValidity("Please enter exactly 10 digits starting with 6, 7, 8, or 9 (e.g., 9876543210)");
                } else {
                    input.setCustomValidity(""); // Clear error if valid
                }
            });

            // Prevent non-numeric input and enforce 10-digit limit
            input.addEventListener("keypress", (e) => {
                const char = String.fromCharCode(e.keyCode || e.which);
                const currentValue = input.value;
                if (!/[0-9]/.test(char) || (currentValue.length === 0 && !/[6-9]/.test(char)) || currentValue.length >= 10) {
                    e.preventDefault();
                }
            });

            // Ensure pasted input is validated
            input.addEventListener("paste", (e) => {
                const pastedData = (e.clipboardData || window.clipboardData).getData("text");
                const regex = /^[6-9][0-9]{9}$/;
                if (!regex.test(pastedData)) {
                    e.preventDefault();
                    input.setCustomValidity("Pasted value must be a 10-digit number starting with 6-9");
                }
            });
        }
    }

    input.id = templateField.label;
    input.name = templateField.label;

    if (allFormData[templateField.label]) input.value = allFormData[templateField.label];

    input.addEventListener("input", (e) => {
        allFormData[templateField.label] = e.target.value;
        console.log(`Updated ${templateField.label}: ${e.target.value}`);
        saveFormData();
    });

    div.appendChild(label);
    div.appendChild(input);
    form.appendChild(div);
}

// Function to navigate to the next section
function navigateToNextSection(currentSection) {
    const activeSections = determineActiveSections(selectedTemplate);
    const currentIndex = activeSections.indexOf(currentSection);
    if (currentIndex < activeSections.length - 1) {
        const nextSection = activeSections[currentIndex + 1];
        document.querySelector('.sidebar nav ul li.active').classList.remove('active');
        document.querySelectorAll('.sidebar nav ul li')[currentIndex + 1].classList.add('active');
        generateSectionFields(nextSection, selectedTemplate, document.getElementById('resumeForm'));
    }
}

// Function to navigate to the previous section
function navigateToPreviousSection(currentSection) {
    const activeSections = determineActiveSections(selectedTemplate);
    const currentIndex = activeSections.indexOf(currentSection);
    if (currentIndex > 0) {
        const prevSection = activeSections[currentIndex - 1];
        document.querySelector('.sidebar nav ul li.active').classList.remove('active');
        document.querySelectorAll('.sidebar nav ul li')[currentIndex - 1].classList.add('active');
        generateSectionFields(prevSection, selectedTemplate, document.getElementById('resumeForm'));
    }
}

// Function to download the resume
async function downloadResume() {
    const formData = JSON.parse(localStorage.getItem('formData') || '{}');
    const payload = {
        template: new URLSearchParams(window.location.search).get('template'),
        fields: formData
    };

    console.log('JSON Payload Sent:', payload);

    try {
        const response = await fetch('http://localhost:8080/api/generate-resume', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            credentials: 'include'
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to generate resume: ${errorText}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${formData['FULL_NAME'] || 'Resume'}_Resume.docx`;
        link.click();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading resume:', error);
        alert('Failed to download resume: ' + error.message);
    }
}

// Function to update tips section
function updateTips(section) {
    const tipsSection = document.querySelector(".tips-section");
    if (!tipsSection) {
        console.error("Tips section not found!");
        return;
    }
    tipsSection.innerHTML = "";

    const tipsHeader = document.createElement("h3");
    tipsHeader.textContent = `${section} Tips`;
    tipsSection.appendChild(tipsHeader);

    const tipsList = document.createElement("ul");
    sectionTips[section]?.forEach((tip) => {
        const li = document.createElement("li");
        li.textContent = tip;
        tipsList.appendChild(li);
    });
    tipsSection.appendChild(tipsList);
}

// Initialize the form
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    selectedTemplate = urlParams.get("template");

    if (!selectedTemplate || !templates[selectedTemplate]) {
        alert("Please select a valid template to proceed.");
        return;
    }

    loadFormData();
    generateDynamicSidebar(selectedTemplate);
    generateSectionFields("Contact", selectedTemplate, document.getElementById('resumeForm'));
    updateTips("Contact");
});