// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openSing_inBtn: document.querySelector('[data-sing_in-open]'),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeSing_inBtn: document.querySelector('[data-sing_in-close]'),
//     // Додати атрибут data-modal на бекдроп модалки
//     sing_in: document.querySelector('[data-sing_in]'),
//   };

//   refs.openSing_inBtn.addEventListener('click', toggleSing_in);
//   refs.closeSing_inBtn.addEventListener('click', toggleSing_in);

//   function toggleSing_in() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.sing_in.classList.toggle('is-open');
//     }
    
  
// })();






(() => {
  const refs = {
    openSing_inBtn: document.querySelector('[data-sing_in-open]'),
    closeSing_inBtn: document.querySelector('[data-sing_in-close]'),
    sing_in: document.querySelector('[data-sing_in]'),
  };

  refs.openSing_inBtn.addEventListener('click', toggleSing_in);
  refs.closeSing_inBtn.addEventListener('click', toggleSing_in);

  refs.sing_in.addEventListener('click', onBackdropClick);

  function toggleSing_in() {
    refs.sing_in.classList.toggle('is-open');
  }

  function onBackdropClick(event) {
    if (event.target === refs.sing_in) {
      toggleSing_in();
    }
  }
})();