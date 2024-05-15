import { fetchPhotosByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const results = document.getElementById('results');

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    iziToast.show({
      message: 'Please, enter the search query!',
      position: 'topRight',
      timeout: 2000,
      color: 'red',
    });
    return;
  }

  fetchPhotosByQuery(query).then(result => {
    console.log(result);

    if (result.total === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 2000,
        color: 'red',
      });
      return;
    }

    results.innerHTML = renderGallery(result.hits);
    lightbox.refresh();
  });
});
