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

let moods = [
    "Majestic",
    "Serene",
    "Boundless",
    "Pristine",
    "Turquoise",
    "Tranquil",
    "Luminous",
    "Undulating",
    "Tempestuous",
    "Mystical",
    "Azure",
    "Vast",
    "Teeming",
    "Crystal-clear",
    "Ethereal",
    "Dynamic",
    "Coastal",
    "Invigorating",
    "Reflective",
    "Sublime"
];

let divElement1 = document.getElementById("explore");

let moodsNumber = Math.floor(Math.random() * moods.length);

console.log(moodsNumber)

console.log(moods[moodsNumber]);

divElement1.innerHTML = moods[moodsNumber];

//button two

let moods2 = [
        "Majestic",
        "Rolling",
        "Verdant",
        "Idyllic",
        "Tranquil",
        "Bucolic",
        "Lush",
        "Serene",
        "Expansive",
        "Sun-drenched",
        "Rustic",
        "Verdant",
        "Gentle",
        "Picturesque",
        "Flourishing",
        "Undulating",
        "Blissful",
        "Swaying",
        "Meadowy",
        "Open",
        "Fragrant"
    ];
    

let divElement2 = document.getElementById("explore2");

let moodsNumber2 = Math.floor(Math.random() * moods2.length);

console.log(moodsNumber2)

console.log(moods[moodsNumber2]);

divElement2.innerHTML = moods[moodsNumber2];

//button three

let moods3 = [
        "Forest",
        "Desert",
        "Tundra",
        "Savannah",
        "Taiga",
        "Grassland",
        "Wetland",
        "Marsh",
        "Swamp",
        "Jungle",
        "Mountain",
        "Canyon",
        "Prairie",
        "Arctic",
        "Steppe",
        "Plateau",
        "Glacier",
        "Valley",
        "Fen",
        "Delta"
    ];
    


let divElement3 = document.getElementById("explore3");

let moodsNumber3 = Math.floor(Math.random() * moods3.length);

console.log(moodsNumber3)

console.log(moods[moodsNumber3]);

divElement3.innerHTML = moods[moodsNumber3];

//button four

let moods4 = [
        "Abyssal",
        "Boundless",
        "Empty",
        "Eerie",
        "Foreboding",
        "Infinite",
        "Ominous",
        "Profound",
        "Shadowy",
        "Sinister",
        "Bottomless",
        "Unfathomable",
        "Desolate",
        "Murky",
        "Intimidating",
        "Mysterious",
        "Haunting",
        "Dismal",
        "Unyielding",
        "Enigmatic"
    ];
    



let divElement4 = document.getElementById("explore4");

let moodsNumber4 = Math.floor(Math.random() * moods4.length);

console.log(moodsNumber4)

console.log(moods[moodsNumber4]);

divElement4.innerHTML = moods[moodsNumber4];

//sonder







menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);