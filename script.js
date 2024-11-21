function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter effect
const texts = [
    "Web developer",
    "Amazon Coach",
    "Shopify Store Builder",
    "Trader",
    "Content Creator"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textindex = 0;
let characterindex = 0; 

function typewriter() {
    if (characterindex < texts[textindex].length) {
        textElements.innerHTML += texts[textindex].charAt(characterindex);
        characterindex++;
        setTimeout(typewriter, speed);
    } else {
        setTimeout(eraseText, 1000); 
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1); 
        setTimeout(eraseText, 50);
    } else {
        textindex = (textindex + 1) % texts.length; 
        characterindex = 0;
        setTimeout(typewriter, 500); 
    }
}

window.onload = typewriter;
