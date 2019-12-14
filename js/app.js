/**
 * Define Global Variables
 *
*/
const navbar = document.getElementById('navbar__list');
const menu = document.getElementsByClassName('menu__link');
const navSections = document.getElementsByTagName('section');
//This gets the text to add to navbar
const navMenu = function(section) {
	return document.createTextNode(section.getAttribute('data-nav'));
}
//add the links to the nav list
const menuLink = function(link, id) {
	const menuItem = document.createElement('li');
	menuItem.appendChild(link);
	menuItem.classList.add('menu__link');
	menuItem.id = `menu-${id}`;
	//use click to scroll to section
	link.addEventListener('click', function() {
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth'
		});
	});
	navbar.appendChild(menuItem);
}
const removeActive = function() {
	for (i = 0; i < navSections.length; i++) {
		navSections[i].classList.remove('your-active-class');
	}
};
const resetActive = function() {
	const navLink = navbar.querySelectorAll('a');
	for (i = 0; i < navSections.length; i++) {
		navLink[i].classList.remove('your-active-class');
	}
};
const selectActive = function() {
	for (let i = 0; i < navSections.length; i++) {
		const sectionArea = navSections[i].getBoundingClientRect();
		if (sectionArea.top >= 0 && sectionArea.top <= 50) {
			return navSections[i];
		}
	}
};
//Highlight active section
const activeMenu = function(section) {
	let menuLists = document.getElementsByTagName('li');
	let activeLink = document.getElementById(`menu-${section}`);
	for (menuList of menuLists) {
		menuList.style.textDecoration = 'none';
	}
	activeLink.style.textDecoration = 'underline overline';
}
//Check to see is section is in viewport. jQuery function help from Stephen Irving here: https://coderwall.com/p/fnvjvg/jquery-test-if-element-is-in-viewport
const isInView = (element) => {
	const elBounds = element.getBoundingClientRect();
	const elTop = (elBounds.top >= 0) && ((elBounds.top) <= (elBounds.height / 3));
	return (elTop);
};
// build the nav
for (const section of navSections) {
	//create the a links
	const links = document.createElement('a');
	//create the link text
	const navLinks = navMenu(section);
	const id = section.id
	links.appendChild(navLinks);
	menuLink(links, id);
}
// Set 'active' when near top of viewport
window.addEventListener('scroll', function() {
	for (const section of navSections) {
		if (isInView(section)) {
			console.log(section);
			removeActive();
			selectActive();
			activeMenu(section.id);
		}
	}
});
// Add collapsible to sections as seen on w3schools.com
const coll = document.getElementsByClassName('toggle');
for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function() {
		this.classList.toggle('active');
		let content = this.nextElementSibling;
		if (content.style.display === 'block') {
			content.style.display = 'none';
		} else {
			content.style.display = 'block';
		}
	});
}