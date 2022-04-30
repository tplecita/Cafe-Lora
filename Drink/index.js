import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { name, ordered, layers, image } = props;
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');

  drinkElm.innerHTML = `
<div class="drink__product">
  <div class="drink__cup">
    <img
      src="${image}"
    />
  </div>
  <div class="drink__info">
    <h3>${name}</h3>
  
  </div>
</div>
<div class="drink__controls">
  <button class="order-btn">Objednat</button>
</div>`;

  const layerElm = drinkElm.querySelector('.drink__info');
  layers.forEach((item) => {
    layerElm.innerHTML += Layer(item);
  });
  const objElm = drinkElm.querySelector('.order-btn');

  let order = ordered;

  objElm.addEventListener('click', () => {
    const objednavka = drinkElm.querySelector('.drink__cup');
    if (!order) {
      objElm.textContent = 'Zrušit';
      objednavka.classList.add('drink__cup--selected');
      order = true;
    } else {
      objElm.textContent = 'Objednat';
      objednavka.classList.remove('drink__cup--selected');
      order = false;
    }
  });

  return drinkElm;
};
