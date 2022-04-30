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
  item.addEventListener('click', hideNavigation);
});

const objElm = document.querySelector('.order-btn');
let ordered = false;

objElm.addEventListener('click', () => {
  if (ordered === true) {
    objElm.textContent = 'Zrušit';
    const objednavka = document.querySelector('.drink__cup');
    objednavka.classList.add('drink__cup--selected');
    ordered = false;
  } else {
    objElm.textContent = 'Objednat';
    const objednavka = document.querySelector('.drink__cup');
    objednavka.classList.remove('drink__cup--selected');
    ordered = true;
  }
});
