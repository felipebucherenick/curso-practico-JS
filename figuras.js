const PI = Math.PI;

// ========================== Cuadrado ==============================================================================

const calcularPerimetroCuadrado = (lado) => lado * 4;
const calcularAreaCuadrado = (lado) => lado * lado;

// Obteniendo datos del HTML

function obtenerPerimetroCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const ladoCuadrado = input.value;
  const perimetroCuadrado = calcularPerimetroCuadrado(ladoCuadrado);
  alert(`El Perimetro de Cuadrado es: ${perimetroCuadrado} cm`);
}

function obtenerAreaCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const ladoCuadrado = input.value;
  const areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
  alert(`El Area de Cuadrado es: ${areaCuadrado} cm^2`);
}

// ========================== Triangulo ==============================================================================

const calcularPerimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;

// Obteniendo datos del HTML

function obtenerPerimetroTriangulo() {
  const ladoTriangulo1 = parseInt(
    document.getElementById('inputLado1Triangulo').value
  );
  const ladoTriangulo2 = parseInt(
    document.getElementById('inputLado2Triangulo').value
  );
  const baseTriangulo = parseInt(
    document.getElementById('inputBaseTriangulo').value
  );
  const perimetroTriangulo = calcularPerimetroTriangulo(
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo
  );
  alert(`El Perimetro del Triangulo es: ${perimetroTriangulo} cm`);
}

function obtenerAreaTriangulo() {
  const baseTriangulo = parseInt(
    document.getElementById('inputBaseTriangulo').value
  );
  const alturaTriangulo = parseInt(
    document.getElementById('inputAlturaTriangulo').value
  );
  const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
  alert(`El Area del Triangulo es: ${areaTriangulo} cm^2`);
}
// =================================0 Circulo =======================================================================

const calcularPerimetroCirculo = (radio) => radio * 2 * PI;
const calcularAreaCirculo = (radio) => radio ** 2 * PI;

// Obteniendo datos del HTML

function obtenerPerimetroCirculo() {
  const radioCuadrado = parseInt(document.getElementById('inputCirculo').value);
  const perimetroCirculo = calcularPerimetroCirculo(radioCuadrado);
  alert(`El Perimetro de Circulo es: ${perimetroCirculo} cm`);
}

function obtenerAreaCirculo() {
  const radioCuadrado = parseInt(document.getElementById('inputCirculo').value);
  const areaCirculo = calcularAreaCirculo(radioCuadrado);
  alert(`El Area de Circulo es: ${areaCirculo} cm^2`);
}

// ============================ Altura Triangulo Isosceles ===========================================================

const calcularAlturaIsosceles = (lado1, base) =>
  Math.sqrt(lado1 ** 2 - base / 2);

function obtenerAlturaIsosceles() {
  const lado1Isosceles = parseInt(
    document.getElementById('inputLado1Isosceles').value
  );
  const lado2Isosceles = parseInt(
    document.getElementById('inputLado2Isosceles').value
  );
  const baseIsosceles = parseInt(
    document.getElementById('inputBaseIsosceles').value
  );
  if (lado1Isosceles == lado2Isosceles) {
    const alturaIsosceles = calcularAlturaIsosceles(
      lado1Isosceles,
      baseIsosceles
    );
    alert(`La Altura del Triangulo es: ${alturaIsosceles} cm`);
  } else {
    alert('El Triangulo no es Isósceles');
  }
}
