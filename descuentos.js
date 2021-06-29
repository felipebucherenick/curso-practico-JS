function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  return (precio * porcentajePrecioConDescuento) / 100;
}

function obtenerPrecioConDescuento() {
  const precioOriginal = parseInt(
    document.getElementById('inputPrecioOriginal').value
  );
  const descuento = parseInt(document.getElementById('inputDescuento').value);
  precioConDescuento = calcularPrecioConDescuento(precioOriginal, descuento);
  const resultadoPrecio = document.getElementById('resultadoPrecio');
  resultadoPrecio.innerText = `El Precio con descuento es : ${precioConDescuento}`;
}
