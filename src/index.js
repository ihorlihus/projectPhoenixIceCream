import './sass/main.scss';


(() => {
    const refs = {
      openModalBtn: document.querySelector("[header-mobile-open]"),
      closeModalBtn: document.querySelector("[header-mobile-close]"),
      modal: document.querySelector("[header-mobile]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
