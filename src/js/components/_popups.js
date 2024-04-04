window.addEventListener('DOMContentLoaded', function() {
  let popupItems = document.querySelectorAll('.products--popup .products__item');

  let openPopup = function(item) {
    item.addEventListener('click', function() {
      let popup = document.createElement('div');
      let popupWrapper = document.createElement('div');
      let popupContent = document.createElement('div');
      let closePopup = document.createElement('div');

      let itemContent = item.children;
      let itemTitle = item.closest('section').querySelector('h2').cloneNode(true);
      let itemBtn = item.closest('section').querySelector('.request-btn').cloneNode(true);

      popup.classList.add('modal');
      popupWrapper.classList.add('modal__wrapper');
      popupContent.classList.add('modal__content');
      closePopup.classList.add('modal__close');
      document.body.style.overflow = "hidden";

      itemBtn.classList.remove('sr-only');

      document.body.appendChild(popup);
      popup.appendChild(popupWrapper);
      popupWrapper.appendChild(itemTitle);
      popupWrapper.appendChild(closePopup);
      popupWrapper.appendChild(popupContent);
      popupWrapper.appendChild(itemBtn);

      for (let i = 0; i < itemContent.length; i++) {
        popupContent.appendChild(itemContent[i].cloneNode(true));
      }

      closePopup.addEventListener('click', function() {
        popup.remove();
        document.body.style.overflow = "initial";
      });

      itemBtn.addEventListener('click', function() {
        popup.remove();
        document.body.style.overflow = "initial";
        item.closest('section').querySelector('.request-btn').click();
      });

      popupContent.addEventListener('click', function(event) {
        event.stopPropagation();
      });

      popup.addEventListener('click', function() {
        popup.remove();
        document.body.style.overflow = "initial";
      });
    });
  };

  for (let item of popupItems) {
    openPopup(item);
  }
});