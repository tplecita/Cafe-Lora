import './style.css';

const navElm = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');

const hideNavigation = () => {
  nav.classList.toggle('nav-closed');
};

navElm.addEventListener('click', () => {
  hideNavigation();
});

const navContentArray = document.querySelectorAll('a');

navContentArray.forEach((item) => {
  item.addEventListener('click', () => {
    hideNavigation();
  });
});
