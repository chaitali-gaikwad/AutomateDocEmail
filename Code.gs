function doPost(e) {
  try {
    var name = e.parameter.name;
    var compname = e.parameter.compname;
    var cif = e.parameter.cif;
    var email = e.parameter.email;
    var now = new Date();
    
    // Load the template document by its ID
    var templateDocId = "templateDocId"; // You can find the ID in the url of the page copy the text after d/ till /edit
    var templateFile = DriveApp.getFileById(templateDocId);
    
    // Make a copy of the template
    var copy = templateFile.makeCopy(name);
    var copyId = copy.getId();
    var doc = DocumentApp.openById(copyId);
    
    // Get the content of the copied document
    var body = doc.getBody();
    
    // Replace the placeholders in the template with the submitted data
    body.replaceText("{{Name}}", name);
    body.replaceText("{{CompanyName}}", compname);
    body.replaceText("{{CIN}}", cif);
    
    // Save and close the document
    doc.saveAndClose();
    
    // Convert the document to PDF
    var pdfBlob = DriveApp.getFileById(copyId).getAs('application/pdf');
    var pdfFile = DriveApp.createFile(pdfBlob.setName(doc.getName() + ".pdf"));
    
    // Get the URL of the PDF file
    var pdfUrl = pdfFile.getUrl();
    
    // Share the PDF file with the user's email address
    pdfFile.addViewer(email);
    
    // Define email recipient, subject, and message
    var recipient1 = email; // Use the provided email as recipient
    var recipient2 = "xyz@gmail.com"; // Add another recipient
    var allRecipient = recipient1 + "," + recipient2;
    var subject = "New Submission from Website";
    var message = "Name: " + name + "\nCompany: " + compname + "\nCIN: " + cif + "\nEmail: " + email + "\nSent on: " + now + "\n\nYou can view the PDF document here: " + pdfUrl;
    
    // Send the email with the link to the PDF document
    MailApp.sendEmail({
      to: allRecipient,
      subject: subject,
      body: message
    });
    
    // Return the URL of the PDF document
    return ContentService.createTextOutput(pdfUrl);
    
  } catch (error) {
    // Log the error and return an error message
    Logger.log("Error: " + error.message);
    return ContentService.createTextOutput("Failed to send email: " + error.message);
  }
}
