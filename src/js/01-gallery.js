// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const img = galleryItems.map(item => {
  return `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`}).join("");


  
  
const matrix= document.querySelector('.gallery')
matrix.innerHTML = img;
matrix.addEventListener('click',(e) => {
  e.preventDefault();
  const lightbox = new SimpleLightbox('.gallery a',{captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,},)
  console.log(lightbox);

  
})