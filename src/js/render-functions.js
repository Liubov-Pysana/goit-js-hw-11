export const renderGallery = hits => {
  return hits
    .map(
      hit => `<li>
        <div class='preview'>
            <a href='${hit.largeImageURL}'><img src='${hit.webformatURL}' alt="${hit.tags}"/></a>
            <div class="stats">
                <div><span class='stat-title'>Likes</span><span>${hit.likes}</span></div>
                <div><span class='stat-title'>Views</span><span>${hit.views}</span></div>
                <div><span class='stat-title'>Comments</span><span>${hit.comments}</span></div>
                <div><span class='stat-title'>Downloads</span><span>${hit.downloads}</span></div>
            </div>
        </div>
  </li>`
    )
    .join('');
};

export const showElement = element => {
  element.style.display = 'block';
};

export const hideElement = element => {
  element.style.display = 'none';
};

// results.insertAdjacentHTML('beforeend', markup);
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });
// lightbox.refresh();
