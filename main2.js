const para = document.getElementById('p1');
const listP = [
    "Je suis un développeur autodidacte avec une forte passion pour le code et la résolution de problèmes.",
    "J’aime apprendre continuellement de nouvelles technologies et m’adapter rapidement aux besoins du projet.",
    "Mon objectif est de rejoindre une équipe dynamique où je pourrai contribuer tout en développant mes compétences, notamment dans le développement full-stack et les environnements cloud."
];

let i = 0;

const changeText = () => {
    para.classList.remove('show'); // Enlève la classe show pour le fondu-out
    
    setTimeout(() => {
        para.innerHTML = listP[i]; // Change le texte à l'index courant
        para.classList.add('show'); // Ajoute la classe show pour le fondu-in
        i = (i + 1) % listP.length; // Repart à 0 si on atteint la fin de la liste
    }, 1000); // Temps du fondu-out avant de changer le texte
};

setTimeout(() => {
    changeText(); // Change le texte pour la première fois
    setInterval(changeText, 5000); // Change le texte toutes les 3 secondes
}, 500); // Délai initial avant de commencer l'animation