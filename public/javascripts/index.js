const nakuGithub = document.getElementById('naku-github');
const flavorwellGithub = document.getElementById('github-flavorwell');
const fitGithub = document.getElementById('fit-github');
const scrapperGithub = document.getElementById('console-github');
const staCruzGitHub = document.getElementById('santa-cruz-github');
const bloomGithub = document.getElementById('bloom-github');
const buttonContactWhatsapp = document.querySelectorAll('.button-component');
const dowloadCVButton = document.getElementById('download-cv-button');
const mobileMenuIcon = document.querySelector('.bi-list');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuIcon.addEventListener('click', () => {

    mobileMenu.classList.toggle('active');
    
});


buttonContactWhatsapp.forEach((button) => {

    button.addEventListener('click', () => {
        window.open('https://api.whatsapp.com/send?phone=525660843490&text=Hola%20Agustin,%20me%20interesa%20tu%20trabajo!', '_blank');
    });

});

fitGithub.addEventListener('click', () => {

    window.open('https://github.com/agusx64/Fit_Life.git', '_blank');

});

flavorwellGithub.addEventListener('click', () => {

    window.open('https://github.com/agusx64/Flavorwell_App.git', '_blank');

});

nakuGithub.addEventListener('click', () => {

    window.open('https://github.com/agusx64/Web_Nak-_Dev.git', '_blank');

});

bloomGithub.addEventListener('click', () => {

    window.open('https://github.com/studio-bloom-digital/studio-bloom-digital-com.git', '_blank');

});

staCruzGitHub.addEventListener('click', () => {

    window.open('https://github.com/agusx64/Santa_Cruz_Management_App.git', '_blank');

});

scrapperGithub.addEventListener('click', () => {

    window.open('https://github.com/agusx64/webscraping-toolkit.git', '_blank');

});

dowloadCVButton.addEventListener('click', () => {

    const link = document.createElement("a");
    link.href = "/docs/cv.pdf"; // Ruta relativa a tu carpeta 'public'
    link.download = "Curriculum Vitae.pdf"; // Nombre con el que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});

const text = `I am a Computer Systems Engineer with a focus on web development. Passionate about building 
functional and visually appealing digital solutions by combining design and technology.`;

const target = document.getElementById("typing-description");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        const char = text.charAt(index);
        if (char === "\n") {
            target.innerHTML += "<br>";
        } else {
            target.innerHTML += char;
        }
        index++;
        setTimeout(typeEffect, 30); // velocidad de tipeo
    }
}

window.addEventListener("load", typeEffect); // inicia al cargar la página