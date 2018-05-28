'use strict';

const img = document.getElementById('slider');
const photos = [
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png',
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png',
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png',
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png', 
  'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png'
];

let pos = 0;

setInterval(() => {
  img.src = photos[pos];
  pos++;
            
  if (pos === photos.length) pos = 0;
}, 5000);