import './style.css';
import initalPage from './inital-page.js';
import menuPage from './menu-page.js';
import reviewPage from './review-page.js';
import aboutPage from './about-page.js';

initalPage();

const navBtns = document.querySelectorAll('header nav button');
navBtns.forEach(btn => btn.addEventListener( 'click', () => document.querySelector('#content').innerHTML = ''));

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () => initalPage());

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', () => menuPage());

const reviewsBtn = document.querySelector('#reviews');
reviewsBtn.addEventListener('click', () => reviewPage());

const aboutBtn = document.querySelector('#about');
aboutBtn.addEventListener('click', () => aboutPage());

console.log('loading from index.js');

