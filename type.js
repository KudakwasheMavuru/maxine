const titles = [
    "Web Designer",
    "Digital Marketer",
    "Business Analyst",
    "Machine Learning Engineer",
    "Project Manager",
    "App Developer",
    "Data Analyst"
];

const typedTextElement = document.getElementById("typed-text");
const cursorLineElement = document.getElementById("cursor-line");
let currentIndex = 0;
let currentTitleIndex = 0;
let isErasing = false;
let typingInterval;

function typeTitle() {
    const currentTitle = titles[currentTitleIndex];
    if (!isErasing) {
        typedTextElement.textContent = currentTitle.substring(0, currentIndex);
        currentIndex++;
    } else {
        typedTextElement.textContent = currentTitle.substring(0, currentIndex);
        currentIndex--;
    }

    if (!isErasing && currentIndex > currentTitle.length) {
        isErasing = true;
        clearInterval(typingInterval);
        setTimeout(typeTitle, 1000); // Pause before erasing
    } else if (isErasing && currentIndex === 0) {
        isErasing = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        clearInterval(typingInterval);
        setTimeout(typeTitle, 1000); // Pause before typing the next title
    } else {
        typingInterval = setTimeout(typeTitle, isErasing ? 100 : 50); // Adjust the typing and erasing speed as needed
    }
}

typeTitle();

