// Fonction pour afficher une section et cacher les autres
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('fade-in'); // retirer l'effet pour éviter conflit
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('fade-in'); // ajouter animation douce
    }
}

// Quand la page charge, montrer l'accueil
window.onload = function() {
    showSection('home');
}
