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
let characterindex = 0; // Correction: il manquait un espace après 'let'

function typewriter() {
    if (characterindex < texts[textindex].length) {
        textElements.innerHTML += texts[textindex].charAt(characterindex);
        characterindex++;
        setTimeout(typewriter, speed);
    } else {
        setTimeout(eraseText, 1000); // Attendre avant d'effacer le texte
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1); // Supprime le dernier caractère
        setTimeout(eraseText, 50);
    } else {
        textindex = (textindex + 1) % texts.length; // Passer au texte suivant en boucle
        characterindex = 0;
        setTimeout(typewriter, 500); // Redémarre l'effet d'écriture
    }
}

window.onload = typewriter;
