const boton = document.querySelector("#boton"); // ID
const menu = document.querySelector("#menu"); // ID
const body = document.getElementById("body");

boton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Codigo para HIDDEN (colocar hidden desde html, toggle desde js) (llamar desde queryselector y #id)

const botonShowProyects = document.querySelector("#buttonShowProyects");
const proyecto1Oculto = document.querySelector("#proyecto1Oculto"); // Es id
const proyecto2Oculto = document.querySelector("#proyecto2Oculto"); // Es id
const proyecto3Oculto = document.querySelector("#proyecto3Oculto"); // Es id
const contenedorProyectoOculto = document.querySelector(
  "#contenedorProyectoOculto"
);

console.log(
  proyecto1Oculto,
  proyecto2Oculto,
  proyecto3Oculto,
  contenedorProyectoOculto
);

botonShowProyects.addEventListener("click", () => {
  proyecto1Oculto.classList.toggle("hidden");
  proyecto2Oculto.classList.toggle("hidden");
  proyecto3Oculto.classList.toggle("hidden");
  botonShowProyects.classList.toggle("hidden");
});
