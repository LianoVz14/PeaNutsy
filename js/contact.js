// JavaScript for live character count
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message');
    const charCountDisplay = document.getElementById('char-count');
    const maxLength = messageInput.maxLength;

    messageInput.addEventListener('input', function() {
        const currentLength = messageInput.value.length;
        charCountDisplay.textContent = `${currentLength}/${maxLength} characters`;
    });

    // Initial display
    charCountDisplay.textContent = `0/${maxLength} characters`;
});
