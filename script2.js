// Example: Adding event listener to the chat form
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the chat message
    const message = chatInput.value;

    // Display the message in the chat box
    displayMessage(message);

    // Clear the input field
    chatInput.value = '';
});

// Example: Function to display a message in the chat box
const displayMessage = (message) => {
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
};
