document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la librairie AOS pour les animations
    AOS.init({
      duration: 800, // Durée de l'animation en ms
      once: true,    // Les animations ne se déclenchent qu'une seule fois
      mirror: false, // Ne pas animer les éléments en défilant vers le haut
    });

    // Gestion de l'accordéon pour la section FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const content = accordionItem.querySelector('.accordion-content');
            
            const isActive = accordionItem.classList.contains('active');

            // Ferme tous les autres éléments actifs pour n'en ouvrir qu'un seul à la fois
            document.querySelectorAll('.accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = '0';
                    item.querySelector('.accordion-header .icon-toggle i').style.transform = 'rotate(0deg)';
                }
            });

            // Bascule l'élément cliqué
            if (!isActive) {
                accordionItem.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector('.icon-toggle i').style.transform = 'rotate(180deg)';
            } else {
                accordionItem.classList.remove('active');
                content.style.maxHeight = "0";
                header.querySelector('.icon-toggle i').style.transform = 'rotate(0deg)';
            }
        });
    });
});
