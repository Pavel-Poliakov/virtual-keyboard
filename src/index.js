/* eslint-disable no-unused-expressions */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
import './index.html';
import './index.scss';
// import code from './img/code.png'
// import { mult, sum } from './modules/calc';
const body = document.querySelector('body');
const header = document.createElement('header');
const p = document.createElement('p');
const main = document.createElement('main');
const textarea = document.createElement('textarea');
const keyContainer = document.createElement('div');
header.className = 'header';
p.className = 'header__text';
main.className = 'main';
textarea.className = 'textarea';
p.innerText = 'Клавиатура создавалась на Windows';
keyContainer.className = 'keyboard-container';
body.appendChild(header);
header.appendChild(p);
body.appendChild(main);
main.appendChild(textarea);
main.appendChild(keyContainer);
let arrEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '/', 'del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift', 'Ctrl', 'win', 'alt', 'space', 'alt', '', '', '', 'Ctrl'];
arrEng.forEach((el, index) => {
  const button = document.createElement('button');
  button.classList.add('btn');
  keyContainer.appendChild(button);
  el.length === 1 ? button.innerText = el.toUpperCase() : button.innerText = el;
  el === 'backspace' ? button.classList.add('btn-backspace') : false;
  el === 'Caps Lock' ? button.classList.add('btn-capslock') : false;
  el === 'enter' ? button.classList.add('btn-enter') : false;
  el === 'Shift' ? button.classList.add('btn-shift') : false;
  el === 'space' ? button.classList.add('btn-space') : false;
  index === 53 ? button.classList.add('btn-up') : false;
  index === 60 ? button.classList.add('btn-left') : false;
  index === 61 ? button.classList.add('btn-down') : false;
  index === 62 ? button.classList.add('btn-right') : false;
});
const btnShift = document.querySelector('.btn-shift');
btnShift.addEventListener('click', () => {
  console.log('yes');
  
  arrEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift', 'Ctrl', 'win', 'alt', 'space', 'alt', '', '', '', 'Ctrl'];
  arrEng.forEach((el, index) => {
    const button = document.createElement('button');
    button.classList.add('btn');
    keyContainer.appendChild(button);
    el.length === 1 ? button.innerText = el.toUpperCase() : button.innerText = el;
    el === 'backspace' ? button.classList.add('btn-backspace') : false;
    el === 'Caps Lock' ? button.classList.add('btn-capslock') : false;
    el === 'enter' ? button.classList.add('btn-enter') : false;
    el === 'Shift' ? button.classList.add('btn-shift') : false;
    el === 'space' ? button.classList.add('btn-space') : false;
    index === 53 ? button.classList.add('btn-up') : false;
    index === 60 ? button.classList.add('btn-left') : false;
    index === 61 ? button.classList.add('btn-down') : false;
    index === 62 ? button.classList.add('btn-right') : false;
  });
});
