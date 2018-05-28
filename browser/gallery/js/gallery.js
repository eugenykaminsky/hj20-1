'use strict';

const photo = document.getElementById('currentPhoto');
const photos = [
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/breuer-building.jpg',
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/guggenheim-museum.jpg',
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/headquarters.jpg',
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/IAC.jpg',
  'https://netology-code.github.io/hj-homeworks/browser/gallery/i/new-museum.jpg'
];

const prevPhoto = document.getElementById('prevPhoto');
const nextPhoto = document.getElementById('nextPhoto');

let count = -1;

function showNextPhoto() {
  count++;
  if (count === photos.length) count = 0;
  photo.src = photos[count];
}

function showPrevPhoto() {
  count--;
  if (count <= -1) count = photos.length - 1;
  photo.src = photos[count];
}

nextPhoto.onclick = showNextPhoto;
prevPhoto.onclick = showPrevPhoto;