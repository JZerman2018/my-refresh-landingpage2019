/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navbar = document.getElementById('navbar_list');
const menu = document.getElementsByClassName('menu__link');
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function showActive(section) {
    section.classList.add('your-active-class');
}

function removeActive(section) {
    section.classList.remove('your-active-class');
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//This gets the text to add to navbar
function navMenu(section) {
    return document.createTextNode(section.getAttribute('data-nav'));
}
// build the nav
for (const section of sections) {
//create the a links
    const links = document.createElement('a');
//create the link text
    const navLinks = navMenu(section);

    const id = section.id
    links.appendChild(navLinks, id);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


