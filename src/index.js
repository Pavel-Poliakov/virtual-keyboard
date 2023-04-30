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
// const keyContainer2 = document.createElement('div');
header.className = 'header';
p.className = 'header__text';
main.className = 'main';
textarea.className = 'textarea';
p.innerText = 'Клавиатура создавалась на Windows';
keyContainer.className = 'keyboard-container';
// keyContainer2.className = 'keyboard-container';
body.appendChild(header);
header.appendChild(p);
body.appendChild(main);
main.appendChild(textarea);
main.appendChild(keyContainer);
const arrEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '; ', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift', 'ctrl', 'win', 'alt', 'Space', 'alt', '', '', '', 'ctrl'];
// eslint-disable-next-line max-len
// const arrRus = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift', 'Ctrl', 'win', 'alt', 'space', 'alt', '', '', '', 'Ctrl'];
arrEng.forEach((el, index) => {
  const button = document.createElement('button');
  button.classList.add('btn');
  keyContainer.appendChild(button);
  el.length === 1 ? button.innerText = el.toUpperCase() : button.innerText = el;
  el === 'Backspace' ? button.classList.add('btn-backspace') : false;
  el === 'caps lock' ? button.classList.add('btn-capslock') : false;
  el === 'Enter' ? button.classList.add('btn-enter') : false;
  el === 'Space' ? button.classList.add('btn-space') : false;
  el === 'Shift' ? button.classList.add('btn-shift') : false;
  index === 42 ? button.classList.add('btn-shift-left') : false;
  index === 53 ? button.classList.add('btn-up') : false;
  index === 54 ? button.classList.add('btn-shift-right') : false;
  index === 55 ? button.classList.add('btn-ctrl-left') : false;
  index === 57 ? button.classList.add('btn-alt-left') : false;
  index === 59 ? button.classList.add('btn-alt-right') : false;
  index === 60 ? button.classList.add('btn-left') : false;
  index === 61 ? button.classList.add('btn-down') : false;
  index === 62 ? button.classList.add('btn-right') : false;
  index === 63 ? button.classList.add('btn-ctrl-right') : false;
});
const btn = document.querySelectorAll('.btn');
const space = document.querySelector('.btn-space');
const btnShiftRight = document.querySelector('.btn-shift-right');
const btnShiftLeft = document.querySelector('.btn-shift-left');
const ctrlLeft = document.querySelector('.btn-ctrl-left');
const ctrlRight = document.querySelector('.btn-ctrl-right');
const altLeft = document.querySelector('.btn-alt-left');
const altRight = document.querySelector('.btn-alt-right');
const capsLock = document.querySelector('.btn-capslock');
// const btn = document.querySelectorAll('.btn');
// const btn = document.querySelectorAll('.btn');
// eslint-disable-next-line no-unused-vars
for (let i = 0; i < btn.length; i++) {
  btn[i].setAttribute('btnname', btn[i].innerText);
  btn[i].setAttribute('lowerCaseName', btn[i].innerText.toLowerCase());
  btn[53].setAttribute('btnname', 'ArrowUp');
  btn[56].setAttribute('btnname', 'Meta');
  btn[60].setAttribute('btnname', 'ArrowLeft');
  btn[61].setAttribute('btnname', 'ArrowDown');
  btn[62].setAttribute('btnname', 'ArrowRight');
}
window.addEventListener('keydown', (e) => {
  for (let i = 0; i < btn.length; i++) {
    if (e.key === btn[i].getAttribute('btnname') || e.key === btn[i].getAttribute('lowerCaseName')) {
      btn[i].classList.add('active');
    }
    if (e.code === 'Space') {
      space.classList.add('active');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.add('active');
    }
    if (e.code === 'AltLeft') {
      altLeft.classList.add('active');
    }
    if (e.code === 'AltRight') {
      altRight.classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      btnShiftRight.classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      btnShiftLeft.classList.remove('active');
    }
    // if (e.code === 'CapsLock') {
    //   capsLock.classList.add('active');
    // }
  }
});
window.addEventListener('keyup', (e) => {
  for (let i = 0; i < btn.length; i++) {
    if (e.key === btn[i].getAttribute('btnname') || e.key === btn[i].getAttribute('lowerCaseName')) {
      btn[i].classList.remove('active');
      btn[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      space.classList.remove('active');
    }
    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.remove('active');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.remove('active');
    }
    if (e.code === 'AltLeft') {
      altLeft.classList.remove('active');
    }
    if (e.code === 'AltRight') {
      altRight.classList.remove('active');
    }
    if (e.code === 'ShiftLeft') {
      btnShiftRight.classList.remove('active');
      btnShiftRight.classList.remove('remove');
    }
    if (e.code === 'ShiftRight') {
      btnShiftLeft.classList.remove('active');
      btnShiftLeft.classList.remove('remove');
    }
    setTimeout(() => {
      btn[i].classList.remove('remove');
    }, 100);
  }
});
