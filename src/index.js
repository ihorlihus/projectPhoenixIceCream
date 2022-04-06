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
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden");
    }

  function toggleModalAbout() {
     document.body.classList.toggle("modal-open");
		refs.modalAbout.classList.toggle("is-hidden");
	 }


  })();
