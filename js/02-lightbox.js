import { galleryItems } from './gallery-items.js';
// Change code below this line



function createGallery() {
    const gallery = document.querySelector('ul.gallery');
  
    
    galleryItems.forEach(item => {
      const galleryItem = document.createElement('li');
      galleryItem.classList.add('gallery__item');
  
      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = item.original;
  
      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = item.preview;
      image.alt = item.description;
  
      link.appendChild(image);
      galleryItem.appendChild(link);
      gallery.appendChild(galleryItem);
    });
  
   
    const galleryHandler = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:200});
    galleryHandler.on('show.simplelightbox', function(e){
        alert("¿Quieres visualizar la imagen?")
        let name = prompt('Escribe tu nombre', '');
        let img = e.target.childNodes
        img[1].alt = img[1].alt + ': ' + name;
    })
  }
  
  
  window.addEventListener('load', createGallery);
