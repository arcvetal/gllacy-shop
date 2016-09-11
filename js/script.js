var feedback = document.querySelector(".btn--location");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal__btn-close");
var login = popup.querySelector("#modal-name");
var mail = popup.querySelector("#modal-email");
var form = popup.querySelector("form");
var overlay = document.querySelector(".modal__overlay");
var storage = localStorage.getItem("login");

feedback.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal--show");
  overlay.classList.add("modal__overlay--show");
  login.focus();

  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal--show");
  popup.classList.remove("modal--error");
  overlay.classList.remove("modal__overlay--show");
});

overlay.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("modal--show");
  popup.classList.remove("modal--error");
  overlay.classList.remove("modal__overlay--show");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !mail.value) {
  event.preventDefault();
  popup.classList.remove("modal--error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal--error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal--show")){
    popup.classList.remove("modal--show");
    popup.classList.remove("modal--error");
    }
  }
});

