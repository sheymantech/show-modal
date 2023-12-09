"use strict";

/*---------project 001----------*/

//----------------------project 002

const showModal = document.querySelectorAll(".show-modal");
const modalHidden = document.querySelector(".modal-hidden");
const closeBtn = document.querySelector(".close-btn");
const overLay = document.querySelector(".over-lay");

function showBtn() {
  modalHidden.style.display = "block";
  overLay.style.display = "block";
  //-----same thing------- modalHidden.classList.remove("hidden");
  showModal[0].classList.add("show");
}

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", showBtn);
}

function showContent() {
  modalHidden.style.display = "none";
  overLay.style.display = "none";
}
closeBtn.addEventListener("click", showContent);
overLay.addEventListener("click", showContent);

document.addEventListener("keydown", function () {
  modalHidden.style.display = "none";
  overLay.style.display = "none";
});