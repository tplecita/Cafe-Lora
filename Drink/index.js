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
  return drinkElm;
};
