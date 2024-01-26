
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// L'évènement DOMContentLoaded est déclenché quand le document HTML initial est complètement chargé et analysé


document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne les flèches du carrousel
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');

    // Sélectionne l'élément d'image du carrousel
    const bannerImage = document.querySelector('.banner-img');

    // Sélectionne les dots du carrousel
    const dots = document.querySelectorAll('.dot');

    // Initialise le compteur d'image actuel
    let currentImageIndex = 0;

  



    //
    //
    //      EVENEMENTS DES FLECHES
    //
    //

    // Ajoute un événements pour la flèche gauche
    arrowLeft.addEventListener('click', () => {
        // Décrémente l'index de l'image actuelle
        currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
        // Met à jour l'image du carrousel
        updateBannerImage();
    });

    // Ajoute un événements pour la flèche droite
    arrowRight.addEventListener('click', () => {
        // Incrémente l'index de l'image actuelle
        currentImageIndex = (currentImageIndex + 1) % slides.length;
        // Met à jour l'image du carrousel
        updateBannerImage();
    });



  
//
//
//      FONCTIONS
//
//

    // Fonction pour mettre à jour l'image du carrousel
    function updateBannerImage() {
        // Met à jour l'image du carrousel
        bannerImage.src = "./assets/images/slideshow/" + slides[currentImageIndex].image;
        bannerImage.alt = slides[currentImageIndex].tagLine;

        // Met à jour la balise span avec la tagLine du slide
        document.querySelector('#banner p span').innerHTML = slides[currentImageIndex].tagLine;

        // Met à jour les dots
        updateDots();
    }

    // Fonction pour mettre à jour les dots
    function updateDots() {
        dots.forEach((dot, index) => {
            // Ajoute ou supprime la classe 'dot_selected' en fonction de l'index
            if (index === currentImageIndex) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    // Défilement automatique du carrousel 
    setInterval(function () {
        // Incrémente l'index de l'image actuelle
        currentImageIndex = (currentImageIndex + 1) % slides.length;
        // Met à jour l'image du carrousel
        updateBannerImage();
    }, 5000);
});