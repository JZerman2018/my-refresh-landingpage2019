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
function addLink(link, id) {
    const listItem = document.createElement('li');
    listItem.appendChild(link);

    listItem.classList.add('menu__link');

    listItem.id = `menu-${id}`;

    //use click to scroll to section
    link.addEventListener('click', function() {
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

//Highlight active section
function activeMenu(section) {
    const menuItems = document.getElementsByTagName('li');
    const activeItem = document.getElementById(`menu-${section}`);

    //Remove underline from the menu items
    for (menuItem of menuItems) {
        menuItem.style.textDecoration = 'none';
    }

//Add underline to active section
    activeItem.style.textDecoration = 'underline';
}

//Check to see is section is in viewport. jQuery function help from Stephen Irving here: https://coderwall.com/p/fnvjvg/jquery-test-if-element-is-in-viewport

const isInView = (element) => {
    const elBounds = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const elTop = (elBounds.top >= 0) && ((elBounds.top) <= (elBounds.height / 3));

    return(elTop);
};

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
            showActive(section);
            activeMenu(section.id);
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


