# AutomateDocEmail
## This project demonstrates how to create a web form that collects user data and generates a customized PDF document based on a template using google app script.

**Prerequisites:**
1. Google account
2. Basic knowledge of HTML and JavaScript.

**Steps:**
1. Google Drive Setup:
Upload your Word document template to your Google Drive. Make sure it's accessible.

2. Google Apps Script Setup:
Open Google Drive and create a new Google Apps Script:
Go to Google Apps Script and create a new script.
Copy the provided code from 'Code.gs' into the script editor.
Replace the templateDocId variable with the ID of your template document.
Save the script.

3. Publish the Google Apps Script as a Web App:
From the script editor, go to Publish > Deploy as web app.
Set the access to "Anyone, even anonymous".
Click "Deploy".
Copy the URL provided after deployment.

4. HTML Form Setup:
Create an HTML file for your form.
Copy the provided HTML code into your HTML file (*index.html*).
Replace *<SCRIPT_URL>* with the URL of the deployed Google Apps Script.

5. Host the HTML Form:
Host the HTML file on a web server or serve it locally.
If serving locally, simply open the HTML file in a web browser.

**Usage:**
1. Fill in the Form:
   Open the hosted HTML form.

2. Fill in all required fields:
   Name, Company Name, CIN (Company Identification Number), Email.

3. Submit the Form:
   Click the "Submit" button.

4. Confirmation:
   You'll receive a confirmation alert indicating the submission was successful.

5. Access PDF Document:
   A PDF document based on the template will be generated and shared with the provided email address.
   You can also view the PDF document by clicking on the link provided in the confirmation alert.

