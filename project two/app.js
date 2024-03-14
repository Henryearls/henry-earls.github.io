const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

//button one

document.addEventListener("DOMContentLoaded", function() {
    let moods = [
        "Sonder", "Saudade", "Numinous", "Epiphany", "Eudaimonia", "Catharsis", "Weltschmerz", "Anagnorisis", "Ataraxia", "Hiraeth", 
        "Ambedo", "Apodyopsis", "Onism", "Liberosis", "Vellichor", "Monachopsis", "Nighthawk", "Exulansis", "Lachesism", 
        "Majestic", "Rolling", "Verdant", "Idyllic", "Tranquil", "Bucolic", "Lush", "Serene", "Expansive", "Sun-drenched", "Rustic", 
        "Verdant", "Gentle", "Picturesque", "Flourishing", "Undulating", "Blissful", "Swaying", "Meadowy", "Open", "Fragrant", 
        "Forest", "Desert", "Tundra", "Savannah", "Taiga", "Grassland", "Wetland", "Marsh", "Swamp", "Jungle", "Mountain", "Canyon", 
        "Prairie", "Arctic", "Steppe", "Plateau", "Glacier", "Valley", "Fen", "Delta", "Abyssal", "Boundless", "Empty", "Eerie", 
        "Foreboding", "Infinite", "Ominous", "Profound", "Shadowy", "Sinister", "Bottomless", "Unfathomable", "Desolate", "Murky", 
        "Intimidating", "Mysterious", "Haunting", "Dismal", "Unyielding", "Enigmatic"
    ];

    let divElement1 = document.getElementById("explore");
    let divElement2 = document.querySelector(".hero__description");

    let moodsNumber = Math.floor(Math.random() * moods.length);

    console.log(moodsNumber);
    console.log(moods[moodsNumber]);

    divElement1.textContent = moods[moodsNumber]; // Update the text content of the span

    if (moods[moodsNumber] === "Sonder") {
        divElement2.textContent = "The realization that each random passerby is living a life as vivid and complex as your own"; // Update the text content of the paragraph
    } else if (moods[moodsNumber] === "Saudade") {
        divElement2.textContent = "a deep emotional state of melancholic longing for something or someone that is absent"; // Update the text content for another specific mood
    } else {
        divElement2.textContent = "Default text for other moods"; // Default text for other moods
    }
});


//button two








menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);