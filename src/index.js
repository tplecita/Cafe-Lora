import './style.css';
import '../Layer/style.css';
import { Drink } from '../Drink/index.js';
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

// const layers = [
//   {
//     color: '#feeeca',
//     label: 'Mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'Teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'Espresso',
//   },
// ];

// const drinkInfoElm = document.querySelector('.drink__info');

// layers.forEach((item) => {
//   drinkInfoElm.innerHTML += Layer(item);
// });

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  },
];

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.results.forEach((item) =>
      document.querySelector('.drinks-list').appendChild(Drink(item)),
    );
  });
