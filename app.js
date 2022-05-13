const boton = document.querySelector("#boton");
const menu = document.querySelector("#menu");

boton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function addClass() {
  loader.classList.add("hidden");
}

function spinner() {
  let divLoader = document.getElementById("divLoader");
  divLoader.classList.remove("hidden");
  let loader = document.getElementById("loader");
  loader.classList.add("desaparecer");
  setTimeout(addClass, 1000);
  // loader.fadeOut();
}

setTimeout(spinner, 2000);
let body = document.getElementById("body");

// Aparece el spinner
// Esta 2 segundos
// Desaparecer FadeOUT (add.hidden) o .fadeout
// Body remove(hidden)
