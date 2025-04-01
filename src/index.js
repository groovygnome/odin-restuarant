import './styles.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { crew } from './crew.js';

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const crewBtn = document.querySelector('.crew');

homeBtn.addEventListener('click', () => home());
menuBtn.addEventListener('click', () => menu());
crewBtn.addEventListener('click', () => crew());

home();
