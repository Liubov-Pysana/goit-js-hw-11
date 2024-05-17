import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotosByQuery } from './js/pixabay-api';
import { renderGallery, hideElement, showElement } from './js/render-functions';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const results = document.getElementById('results');
const loadingIndicator = document.getElementById('loading-indicator');

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

function showError(message) {
  iziToast.show({
    message: message,
    position: 'topRight',
    timeout: 2000,
    color: 'red',
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    showError('Please, enter the search query!');
    return;
  }

  showElement(loadingIndicator);
  results.innerHTML = '';
  fetchPhotosByQuery(query)
    .then(result => {
      if (result.total === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      results.innerHTML = renderGallery(result.hits);
      lightbox.refresh();
    })
    .catch(e => {
      showError('Sorry, some error occured. Please, try again!');
    })
    .finally(() => {
      hideElement(loadingIndicator);
    });
});
