
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  menu.classList.toggle('menu--close');
  let content = document.querySelector('.articles');
  if (menu.classList.contains('menu--open')) {
    content.addEventListener('click', toggleMenu);
  } else {
    content.removeEventListener('click', toggleMenu);
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

