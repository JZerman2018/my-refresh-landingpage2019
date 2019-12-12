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
const navbar = document.getElementById('navbar__list');
const menu = document.getElementsByClassName('menu__link');
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//This gets the text to add to navbar
function navMenu(section) {
    return document.createTextNode(section.getAttribute('data-nav'));
}

//add the links to the nav list
function addLink(links, id) {
    const listItem = document.createElement('li');
    listItem.appendChild(links);

    listItem.classList.add('menu__link');

    //use click to scroll to section
    links.addEventListener('click', function() {
        document.getElementById(id).scrollIntoView(
            {behavior: 'smooth'} );
    });

    navbar.appendChild(listItem);
}


function removeActive(section) {
    for(const section of sections) {
    section.classList.remove('your-active-class');
}
}

function showActive(section) {
    section.classList.add('your-active-class');
}

//Check to see is section is in viewport. jQuery function help from Stephen Irving here: https://coderwall.com/p/fnvjvg/jquery-test-if-element-is-in-viewport

const isInView = (element) => {
    const w = window,
    elBounds = element.getBoundingClientRect(),
    scrollTop = w.pageYOffset,
    elTop = elBounds.y + scrollTop;

    return(
        elTop < (w.innerHeight + scrollTop) &&
        elTop > (scrollTop - elBounds.height));
}

// build the nav
for (const section of sections) {
//create the a links
    const links = document.createElement('a');
//create the link text
    const navLinks = navMenu(section);

    const id = section.id
    links.appendChild(navLinks);
    addLink(links, id);
}

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function() {
    for (const section of sections) {
        if (isInView(section)) {
            console.log(section);
            removeActive();
            showActive();
        }
    }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


