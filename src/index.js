import './sass/main.scss';


(() => {
    const refs = {
      openModalBtn: document.querySelector("[header-mobile-open]"),
      closeModalBtn: document.querySelector("[header-mobile-close]"),
      modal: document.querySelector("[header-mobile]"),

		openAboutModalBtn: document.querySelector('[about-modal-open]'),
      closeAboutModalBtn: document.querySelector('[about-modal-close]'),
      modalAbout: document.querySelector('[about-modal]'),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);


	 refs.openAboutModalBtn.addEventListener('click', toggleModalAbout);
    refs.closeAboutModalBtn.addEventListener('click', toggleModalAbout);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }

	 function toggleModalAbout() {
		refs.modalAbout.classList.toggle("is-hidden");
	 }


  })();
