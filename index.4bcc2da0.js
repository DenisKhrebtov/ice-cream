(()=>{const e={openMenuBtn:document.querySelector(".header-menu__open"),closeMenuBtn:document.querySelector(".mob-menu__close"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body")};function o(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector(".tab-button__order"),openModalMobileBtn:document.querySelector(".button__order"),closeModalBtn:document.querySelector(".modal-button"),modal:document.querySelector(".modal-one"),body:document.querySelector("body")};function o(){document.body.classList.toggle("no-scroll"),e.modal.classList.toggle("is-hidden")}document.getElementById("order-form").addEventListener("submit",(function(e){e.preventDefault()})),e.openModalMobileBtn.addEventListener("click",o),e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalTwoBtn:document.querySelector(".button__submit"),closeModal1Btn:document.querySelector(".modal-button"),closeModal2Btn:document.querySelector(".modal-button-two"),modal1:document.querySelector(".modal-one"),modal2:document.querySelector(".modal-two"),body:document.querySelector("body")};e.openModalTwoBtn.addEventListener("click",(function(){e.modal1.classList.toggle("is-hidden"),e.modal2.classList.toggle("is-hidden-two")})),e.closeModal1Btn.addEventListener("click",(function(){document.body.classList.toggle("no-scroll"),e.modal2.classList.toggle("is-hidden")})),e.closeModal2Btn.addEventListener("click",(function(){document.body.classList.toggle("no-scroll"),e.modal2.classList.toggle("is-hidden-two")}))})();
//# sourceMappingURL=index.4bcc2da0.js.map
