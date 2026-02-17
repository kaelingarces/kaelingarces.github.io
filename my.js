const staticMessage = "Hi! My name is Kaelin Garces. ";
const phrases = [
    "Welcome to my website.",
    "I am a graduate with a M.S in Cybersecurity from Fordham University",
    "I work in Marketing Technology within the Legal Industry",
    "Let's explore my projects.",
];

const typingSpeed = 50; // Speed of typing in milliseconds
const pauseDuration = 1300; // Pause between phrases in milliseconds
const charDelay = 60; // Delay between typing each character

const typingContainer = document.getElementById("typing-container");
const typingText = document.getElementById("typing-text");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentPhrase = phrases[phraseIndex];
    const currentChar = currentPhrase.charAt(charIndex);

    if (isDeleting) {
        // Deleting text
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;

        // When text is fully deleted, switch to typing mode
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex++;
            // Move to the next phrase or loop back to the beginning
            if (phraseIndex === phrases.length) {
                phraseIndex = 0;
            }
            setTimeout(typeText, pauseDuration); // Pause before typing next phrase
        } else {
            setTimeout(typeText, charDelay);
        }
    } else {
        // Typing text
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;

        // When text is fully typed, switch to deleting mode
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeText, pauseDuration); // Pause before deleting
        } else {
            setTimeout(typeText, charDelay);
        }
    }
}

// Start typing animation
setTimeout(typeText, typingSpeed);

