// Typewriter Animation Script
const messages = [
    "You can check your SGPA and CGPA here",
    "You can check your leaderboard"
];

let currentMessageIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let isWaiting = false;

const typewriterElement = document.getElementById('typewriter');
const typingSpeed = 80;
const deletingSpeed = 40;
const waitTime = 2000; // Wait 2 seconds before erasing

function typeWriter() {
    const currentMessage = messages[currentMessageIndex];
    
    // Add typing class for cursor animation
    typewriterElement.classList.add('typing');

    if (!isDeleting) {
        // Typing phase
        if (currentCharIndex < currentMessage.length) {
            typewriterElement.textContent += currentMessage.charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Finished typing, wait before erasing
            isWaiting = true;
            typewriterElement.classList.remove('typing');
            setTimeout(() => {
                isWaiting = false;
                isDeleting = true;
                typeWriter();
            }, waitTime);
        }
    } else {
        // Deleting phase
        if (currentCharIndex > 0) {
            typewriterElement.textContent = currentMessage.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(typeWriter, deletingSpeed);
        } else {
            // Finished deleting, move to next message
            isDeleting = false;
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
            
            // Small delay before starting next message
            setTimeout(typeWriter, 500);
        }
    }
}

// Start the typewriter animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Navigate to dashboard
function navigateToDashboard() {
    window.location.href = 'dashboard.html';
}
