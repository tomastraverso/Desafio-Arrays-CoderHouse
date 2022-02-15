const listaCompras = [];
const agregar = document.getElementById("agregar");
const quitar = document.getElementById("quitar");
const ver = document.getElementById("ver");
agregar.addEventListener("click", agregarElemento);
quitar.addEventListener("click", quitarElemento);
ver.addEventListener("click", verLista);

function agregarElemento() {
  let elemento = prompt(
    "Ingrese el elemento que desea agregar a su lista de compras."
  );
  if (elemento.length === 0 || elemento === " ") {
    alert("No has ingresado ningún elemento.");
  } else {
    listaCompras.push(elemento);
    alert(`Has ingresado el elemento ${elemento} a la lista.`);
  }
}

function quitarElemento() {
  let validarPos = undefined;
  if (listaCompras.length != 0) {
    validarPos = listaCompras.indexOf(
      prompt("Ingrese el valor que desea quitar.")
    );
  } else {
    alert("La lista se encuentra vacía.");
  }
  if (validarPos === -1) {
    alert("Ese elemento no se encuentra en la lista.");
    alert(
      `Recuerda que estos son los elementos que se encuentran en la lista: \n"${listaCompras}".`
    );
  } else {
    listaCompras.splice(validarPos, 1);
  }
}

function verLista() {
  if (listaCompras.length === 0) {
    alert("Aún no has ingresado ningún elemento en la lista.");
  } else {
    alert(`Los elementos de tu lista son:\n"${listaCompras}"`);
  }
}
