import "@babel/polyfill";
import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc.js';
import code from './img/kiyv-ghost.png';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
img.width = 300;
imgWrap.append(img);

console.log(mult(2, 4));
console.log(sum(2, 5));