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
        divElement2.textContent = "a deep emotional state of melancholic longing for something or someone that is absent";
    } else if (moods[moodsNumber] === "Numinous") {
        divElement2.textContent = "the feeling of being in the presence of something greater than oneself, often accompanied by a sense of awe or reverence";
    } else if (moods[moodsNumber] === "Epiphany") {
        divElement2.textContent = "you will have a sudden and profound realization";
    } else if (moods[moodsNumber] === "Eudaimonia") {
        divElement2.textContent = "a state of flourishing or true happiness that comes from living a life of purpose and meaning";
    } else if (moods[moodsNumber] === "Catharsis") {
        divElement2.textContent = "the release of pent-up emotions or tension through expression or purification";
    } else if (moods[moodsNumber] === "Weltschmerz") {
        divElement2.textContent = "a feeling of melancholy or world-weariness, often arising from the perceived inadequacy of the world or society";
    } else if (moods[moodsNumber] === "Anagnorisis") {
        divElement2.textContent = "the moment of recognition or discovery, especially in a dramatic or literary context";
    } else if (moods[moodsNumber] === "Ataraxia") {
        divElement2.textContent = "a state of serene calmness and tranquility, often achieved through acceptance and detachment";
    } else if (moods[moodsNumber] === "Hiraeth") {
        divElement2.textContent = "a longing for a home or place that no longer exists or that one cannot return to";
    } else if (moods[moodsNumber] === "Ambedo") {
        divElement2.textContent = "the melancholic trance one experiences when lost in a vivid daydream or reverie";
    } else if (moods[moodsNumber] === "Saudade") {
        divElement2.textContent = "a Portuguese word describing a deep emotional state of nostalgic or profound melancholic longing for an absent something or someone";
    } else if (moods[moodsNumber] === "Apodyopsis") {
        divElement2.textContent = "the act of mentally undressing someone";
    } else if (moods[moodsNumber] === "Onism") {
        divElement2.textContent = "the awareness of how little of the world you'll experience";
    } else if (moods[moodsNumber] === "Liberosis") {
        divElement2.textContent = "the desire to care less about things";
    } else if (moods[moodsNumber] === "Vellichor") {
        divElement2.textContent = "the strange wistfulness of used bookstores";
    } else if (moods[moodsNumber] === "Monachopsis") {
        divElement2.textContent = "the subtle but persistent feeling of being out of place";
    } else if (moods[moodsNumber] === "Nighthawk") {
        divElement2.textContent = "a recurring thought that only seems to strike you late at night";
    } else if (moods[moodsNumber] === "Exulansis") {
        divElement2.textContent = "the tendency to give up trying to talk about an experience because people are unable to relate to it";
    } else if (moods[moodsNumber] === "Lachesism") {
        divElement2.textContent = "the desire to be struck by disaster - to survive a plane crash, or to lose everything in a fire";
    } else {
        divElement2.textContent = "Default text for other moods"; // Default text for other moods
    }
});


//backround color

document.addEventListener("DOMContentLoaded", function() {
    let heroElement = document.querySelector(".hero2");

    // Generate random RGB color values
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);

    // Convert RGB values to hexadecimal format
    let randomColor = '#' + ((1 << 24) + (randomRed << 16) + (randomGreen << 8) + randomBlue).toString(16).slice(1);

    // Set the background color using the linear gradient with the random color
    heroElement.style.background = `linear-gradient(to right, ${randomColor}, #363795)`;
});












menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);