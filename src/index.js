import './style.css';
import '../Layer/style.css';
import { Layer } from '../Layer/index.js';

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
  const objednavka = document.querySelector('.drink__cup');
  if (!ordered) {
    objElm.textContent = 'Zrušit';
    objednavka.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    objElm.textContent = 'Objednat';
    objednavka.classList.remove('drink__cup--selected');
    ordered = false;
  }
});

const cappuccino = [
  {
    color: '#feeeca',
    label: 'Mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'Teplé mléko',
  },
  {
    color: '#613916',
    label: 'Espresso',
  },
];

const drinkInfoElm = document.querySelector('.drink__info');
drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'Mléčná pěna' });
drinkInfoElm.innerHTML += Layer({ color: '#fed7b0', label: 'Teplé mléko' });
drinkInfoElm.innerHTML += Layer({ color: '#613916', label: 'Espresso' });
