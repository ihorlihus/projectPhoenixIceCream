(() => {
    const refs = {
      openModalBtn: document.querySelector("[header-modal-window-open]"),
      closeModalBtn: document.querySelector("[header-modal-window-close]"),
      modal: document.querySelector("[header-modal-window]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();