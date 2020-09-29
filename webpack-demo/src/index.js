import _ from 'lodash';
import './style.css'
import helmet from './helmet.png'
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join([' ', 'Hello'], ' ');
  element.classList.add('hello');
  const img = new Image
  img.src = helmet

  element.appendChild(img)
  return element;
}

document.body.appendChild(component());