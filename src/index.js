/* eslint-disable no-unused-expressions */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
import './index.html';
import './index.scss';
// import code from './img/code.png'
// import { mult, sum } from './modules/calc';
const Keyboard = {
  elements: {
    header: null,
    p: null,
    main: null,
    textarea: null,
    keysContainer: null,
    keys: [],
  },
  eventHandlers: {
    oninput: null,
    onclose: null,
  },
  properties: {
    value: '',
    capsLock: false,
  },
  createDom() {
    // !create elements
    this.elements.header = document.createElement('header');
    this.elements.p = document.createElement('p');
    this.elements.p.innerText = 'Клавиатура создавалась на Windows';
    this.elements.main = document.createElement('main');
    this.elements.textarea = document.createElement('textarea');
    this.elements.keysContainer = document.createElement('div');
    // !add class name
    this.elements.header.className = 'header';
    this.elements.p.className = 'header__text';
    this.elements.main.className = 'main';
    this.elements.textarea.className = 'textarea';
    this.elements.keysContainer.className = 'keyboard-container';
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.btn');
    document.body.appendChild(this.elements.header);
    document.body.appendChild(this.elements.main);
    this.elements.header.appendChild(this.elements.p);
    this.elements.main.appendChild(this.elements.textarea);
    this.elements.main.appendChild(this.elements.keysContainer);
    this.elements.keysContainer.appendChild(this.createKeys());
    document.querySelectorAll('.textarea').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element.value, (currentValue) => {
          // eslint-disable-next-line no-param-reassign
          element.value = currentValue;
        });
      });
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    const arrWord = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '; ', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift', 'ctrl', 'win', 'alt', 'Space', 'alt', 'Left', 'Down', 'Right', 'ctrl'];

    // eslint-disable-next-line camelcase
    const createIcon = (icon_name) => `<i class="material-icons">${icon_name}</i>`;

    arrWord.forEach((key, index) => {
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add('btn');
      index === 42 ? button.classList.add('btn-shift-left') : false;
      index === 53 ? button.classList.add('btn-up') : false;
      index === 53 ? button.setAttribute('btnname', 'ArrowUp') : false;
      index === 54 ? button.classList.add('btn-shift-right') : false;
      index === 55 ? button.classList.add('btn-ctrl-left') : false;
      index === 56 ? button.setAttribute('btnname', 'Meta') : false;
      index === 57 ? button.classList.add('btn-alt-left') : false;
      index === 59 ? button.classList.add('btn-alt-right') : false;
      index === 60 ? button.classList.add('btn-left') : false;
      index === 60 ? button.setAttribute('btnname', 'ArrowLeft') : false;
      index === 61 ? button.classList.add('btn-down') : false;
      index === 61 ? button.setAttribute('btnname', 'ArrowDown') : false;
      index === 62 ? button.classList.add('btn-right') : false;
      index === 62 ? button.setAttribute('btnname', 'ArrowRight') : false;
      index === 63 ? button.classList.add('btn-ctrl-right') : false;

      // eslint-disable-next-line default-case
      switch (key) {
        case 'Backspace':
          button.classList.add('btn-backspace');
          button.innerHTML = createIcon('Backspace');
          button.addEventListener('click', () => {
            // eslint-disable-next-line max-len
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this.triggerEvent('oninput');
          });

          break;

        case 'caps lock':
          button.classList.add('btn-capslock');
          button.innerHTML = createIcon('Caps Lock');

          button.addEventListener('click', () => {
            // eslint-disable-next-line no-underscore-dangle
            this.toggleCapsLock();
            button.classList.toggle('active', this.properties.capsLock);
          });
          break;
        case 'Enter':
          button.classList.add('btn-enter');
          button.innerHTML = createIcon('Enter');

          button.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent('oninput');
          });
          break;
        case 'Space':
          button.classList.add('btn-space');
          button.innerHTML = createIcon('Space');

          button.addEventListener('click', () => {
            this.properties.value += ' ';
            this.triggerEvent('oninput');
          });
          break;
        case 'Tab':
          button.classList.add('btn-tab');
          button.innerHTML = createIcon('Tab');
          button.addEventListener('click', () => {
            this.properties.value += '  ';
            this.triggerEvent('oninput');
          });
          break;
        case 'Delete':
          button.classList.add('btn-del');
          button.innerHTML = createIcon('Delete');
          button.addEventListener('click', () => {
            // eslint-disable-next-line max-len
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this.triggerEvent('oninput');
          });
          break;
        case 'Shift':
          button.classList.add('btn-shift');
          button.innerHTML = createIcon('Shift');
          break;
        case 'ctrl':
          button.classList.add('btn-ctrl');
          button.innerHTML = createIcon('ctrl');
          break;
        case 'alt':
          button.classList.add('btn-alt');
          button.innerHTML = createIcon('alt');
          break;
        case 'win':
          button.classList.add('btn-win');
          button.innerHTML = createIcon('win');
          break;
        default:
          button.textContent = key.toLowerCase();
          button.addEventListener('click', () => {
            // eslint-disable-next-line max-len
            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            this.triggerEvent('oninput');
          });
          break;
      }
      fragment.appendChild(button);
    });
    return fragment;
  },
  triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },
  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    // eslint-disable-next-line no-restricted-syntax
    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        // eslint-disable-next-line max-len
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },
  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
  },
  close() {
    this.properties.value = '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
  },
};
window.addEventListener('DOMContentLoaded', () => {
  Keyboard.createDom();
});





// const body = document.querySelector('body');
// const header = document.createElement('header');
// const p = document.createElement('p');
// const main = document.createElement('main');
// const textarea = document.createElement('textarea');
// const keyContainer = document.createElement('div');
// // const keyContainer2 = document.createElement('div');
// header.className = 'header';
// p.className = 'header__text';
// main.className = 'main';
// textarea.className = 'textarea';
// p.innerText = 'Клавиатура создавалась на Windows';
// keyContainer.className = 'keyboard-container';
// // keyContainer2.className = 'keyboard-container';
// body.appendChild(header);
// header.appendChild(p);
// body.appendChild(main);
// main.appendChild(textarea);
// main.appendChild(keyContainer);
// const arrEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '; ', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift', 'ctrl', 'win', 'alt', 'Space', 'alt', '', '', '', 'ctrl'];
// // eslint-disable-next-line max-len
// // const arrRus = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift', 'Ctrl', 'win', 'alt', 'space', 'alt', '', '', '', 'Ctrl'];
// let button;
// function createHTML(array) {
//   array.forEach((el, index) => {
//     button = document.createElement('button');
//     button.classList.add('btn');
//     keyContainer.appendChild(button);
//     el.length === 1 ? button.innerText = el.toLowerCase() : button.innerText = el;
//     el === 'Backspace' ? button.classList.add('btn-backspace') : false;
//     el === 'caps lock' ? button.classList.add('btn-capslock') : false;
//     el === 'Enter' ? button.classList.add('btn-enter') : false;
//     el === 'Space' ? button.classList.add('btn-space') : false;
//     el === 'Shift' ? button.classList.add('btn-shift') : false;
//     index === 42 ? button.classList.add('btn-shift-left') : false;
//     index === 53 ? button.classList.add('btn-up') : false;
//     index === 54 ? button.classList.add('btn-shift-right') : false;
//     index === 55 ? button.classList.add('btn-ctrl-left') : false;
//     index === 57 ? button.classList.add('btn-alt-left') : false;
//     index === 59 ? button.classList.add('btn-alt-right') : false;
//     index === 60 ? button.classList.add('btn-left') : false;
//     index === 61 ? button.classList.add('btn-down') : false;
//     index === 62 ? button.classList.add('btn-right') : false;
//     index === 63 ? button.classList.add('btn-ctrl-right') : false;
//   });
// }
// createHTML(arrEng);
// const btn = document.querySelectorAll('.btn');
// const space = document.querySelector('.btn-space');
// const btnShiftRight = document.querySelector('.btn-shift-right');
// const btnShiftLeft = document.querySelector('.btn-shift-left');
// const ctrlLeft = document.querySelector('.btn-ctrl-left');
// const ctrlRight = document.querySelector('.btn-ctrl-right');
// const altLeft = document.querySelector('.btn-alt-left');
// const altRight = document.querySelector('.btn-alt-right');
// let capsLock = document.querySelector('.btn-capslock');
// // const btn = document.querySelectorAll('.btn');
// // const btn = document.querySelectorAll('.btn');
// // eslint-disable-next-line no-unused-vars
const btn = document.querySelectorAll('.btn');
for (let i = 0; i < btn.length; i++) {
  btn[i].setAttribute('btnname', btn[i].innerText);
  btn[i].setAttribute('lowerCaseName', btn[i].innerText.toLowerCase());
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
// // eslint-disable-next-line consistent-return
// capsLock.addEventListener('click', () => {
//   if (capsLock.classList.contains('active2')) {
//     document.querySelectorAll('.btn').forEach((item) => item.remove());
//     arrEng.forEach((el, index) => {
//       const button3 = document.createElement('button');
//       button3.classList.add('btn');
//       keyContainer.appendChild(button3);
//       el.length === 1 ? button3.innerText = el.toLowerCase() : button3.innerText = el;
//       el === 'Backspace' ? button3.classList.add('btn-backspace') : false;
//       el === 'caps lock' ? button3.classList.add('btn-capslock') : false;
//       el === 'Enter' ? button3.classList.add('btn-enter') : false;
//       el === 'Space' ? button3.classList.add('btn-space') : false;
//       el === 'Shift' ? button3.classList.add('btn-shift') : false;
//       index === 42 ? button3.classList.add('btn-shift-left') : false;
//       index === 53 ? button3.classList.add('btn-up') : false;
//       index === 54 ? button3.classList.add('btn-shift-right') : false;
//       index === 55 ? button3.classList.add('btn-ctrl-left') : false;
//       index === 57 ? button3.classList.add('btn-alt-left') : false;
//       index === 59 ? button3.classList.add('btn-alt-right') : false;
//       index === 60 ? button3.classList.add('btn-left') : false;
//       index === 61 ? button3.classList.add('btn-down') : false;
//       index === 62 ? button3.classList.add('btn-right') : false;
//       index === 63 ? button3.classList.add('btn-ctrl-right') : false;
//     });
//   } else {
//     console.log('yes');
//     document.querySelectorAll('.btn').forEach((item) => item.remove());
//     arrEng.forEach((el, index) => {
//       const button2 = document.createElement('button');
//       button2.classList.add('btn');
//       keyContainer.appendChild(button2);
//       el.length === 1 ? button2.innerText = el.toUpperCase() : button2.innerText = el;
//       el === 'Backspace' ? button2.classList.add('btn-backspace') : false;
//       el === 'caps lock' ? button2.classList.add('btn-capslock') : false;
//       el === 'caps lock' ? button2.classList.add('active2') : false;
//       el === 'Enter' ? button2.classList.add('btn-enter') : false;
//       el === 'Space' ? button2.classList.add('btn-space') : false;
//       el === 'Shift' ? button2.classList.add('btn-shift') : false;
//       index === 42 ? button2.classList.add('btn-shift-left') : false;
//       index === 53 ? button2.classList.add('btn-up') : false;
//       index === 54 ? button2.classList.add('btn-shift-right') : false;
//       index === 55 ? button2.classList.add('btn-ctrl-left') : false;
//       index === 57 ? button2.classList.add('btn-alt-left') : false;
//       index === 59 ? button2.classList.add('btn-alt-right') : false;
//       index === 60 ? button2.classList.add('btn-left') : false;
//       index === 61 ? button2.classList.add('btn-down') : false;
//       index === 62 ? button2.classList.add('btn-right') : false;
//       index === 63 ? button2.classList.add('btn-ctrl-right') : false;
//     });
//   }
// });
