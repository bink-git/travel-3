const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');
const slider3 = document.getElementById('slider-3');

const dot1 = document.getElementById('dot-1');
const dot2 = document.getElementById('dot-2');
const dot3 = document.getElementById('dot-3');

const left = document.querySelector('.left');
const middle = document.querySelector('.middle');
const right = document.querySelector('.right');

const slider = document.querySelector('.dest-wrapper');

const cards = document.querySelectorAll('.dest-card');
const card = document.querySelector('.dest-card');

right.addEventListener('click', () => {
  slider.style.transform = 'translateX(-98%)';
  left.style.transform = 'translateX(320%)';
  // middle.classList.remove('middle');
  // right.classList.replace('right', 'middle');
});

left.addEventListener('click', () => {
  slider.style.transform = 'translateX(25%)';
  right.style.transform = 'translateX(-320%)';
  // left.classList.replace('left', 'middle');
  // middle.classList.replace('middle', 'right');
});

// cards.forEach((item, i) => {
//   item.addEventListener('click', (e) => {
//     slider.style.transform = 'translateX(-98%)';
//     left.style.transform = 'translateX(320%)';
//     if (i === 0) {
//       e.target.offsetParent.classList.toggle('left');
//       e.target.offsetParent.classList.toggle('middle');
//     }
//     if (i === 2) {
//       e.target.offsetParent.classList.add('middle');
//     }
//   });
// });

// for (let card of cards) {
//   card.addEventListener('click', (el) => {
//     // slider.style.transform = 'translateX(-98%)';
//     el.target.classList.add('current');
//     slider1.classList.add('left');
//     cards.classList.remove('current');
//     if (el.classList.contains('current')) {
//       card.classList.remove('current');
//     }
//     if (el.target.id == '3') {
//       el.target.offsetParent.style.order = `${+el.target.id - 1}`;
//       el.target.offsetParent.previousElementSibling.style.order = `${
//         +el.target.id + 1
//       }`;
//     }
//     if (el.target.id == '1') {
//       el.target.offsetParent.style.order = `${+el.target.id + 1}`;
//       el.target.offsetParent.nextElementSibling.style.order = `${
//         +el.target.id - 1
//       }`;
//     }
//   });
// }

// slider3.addEventListener('click', () => {
//   slider1.style.order = '3';
//   slider2.style.order = '1';
//   slider3.style.order = '2';
// });

// slider1.addEventListener('click', () => {
//   slider1.style.order = '2';
//   slider2.style.order = '3';
//   slider3.style.order = '1';
// });

// slider1.addEventListener('click', () => {
//   slider1.style.transform = 'translateX(108%)';
//   slider2.style.transform = 'translateX(108%)';
//   slider3.style.transform = 'translateX(-215%)';
// });
