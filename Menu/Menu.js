/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(linkItems) {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const linksContainer = document.createElement('ul');
  menu.appendChild(linksContainer);
  linkItems.forEach(item => {
    let link = document.createElement('li');
    link.textContent = item;
    linksContainer.appendChild(link);
  });
  const body = document.querySelector('body');
  const bodyOverlay = document.createElement('div');
  bodyOverlay.classList.add('overlay');
  bodyOverlay.classList.add('nav-closed');
  body.prepend(bodyOverlay);

  function overlayToggleMenu() {
    menu.classList.remove('menu--open');
    bodyOverlay.classList.add('nav-closed');
  }

  bodyOverlay.addEventListener('click', overlayToggleMenu);

  function toggleMenu() {
    menu.classList.toggle('menu--open');
    bodyOverlay.classList.toggle('nav-closed');
  }

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', toggleMenu);
  
  return menu;
}

const menu = createMenu(menuItems);
const header = document.querySelector('.header');
header.appendChild(menu);