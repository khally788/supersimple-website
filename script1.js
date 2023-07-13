// Example: Adding event listener to the submit button
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Perform form validation and submission logic here
    
    // Example: Get the form values
    const name = document.getElementById('name').value;
    const tattooDesign = document.getElementById('tattoo-design').files[0];
    const contactNumber = document.getElementById('contact-number').value;
    const contactEmail = document.getElementById('contact-email').value;
    const contactInstagram = document.getElementById('contact-instagram').value;
    
    // Example: Generate and send document to the email
    const emailContent = `
        Name: ${name}
        Contact Number: ${contactNumber}
        Contact Email: ${contactEmail}
        Contact Instagram: ${contactInstagram}
    `;
    
    // Replace the following lines with actual code to upload the image and send the email
    if (tattooDesign) {
        // Upload the image to the server
        console.log('Uploading image:', tattooDesign.name);
    }
    
    console.log(emailContent);
    bookingForm.reset(); // Reset the form
});
