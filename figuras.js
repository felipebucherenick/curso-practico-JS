// Cuadrado
console.group('Cuadrado:');

const ladoCuadrado = 4;
const calcularPerimetroCuadrado = (lado) => lado * 4;
const calcularAreaCuadrado = (lado) => lado * lado;

const perimetroCuadrado = calcularPerimetroCuadrado(ladoCuadrado);
const areaCuadrado = calcularAreaCuadrado(ladoCuadrado);

console.log(`Los lados del Cuadrado miden: ${ladoCuadrado}cm`);
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);
console.log(`El Area del cuadrado es: ${areaCuadrado}cm^2`);

console.groupEnd();

// Triangulo
console.group('Triangulo:');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const calcularPerimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;

const perimetroTriangulo = calcularPerimetroTriangulo(
  ladoTriangulo1,
  ladoTriangulo2,
  baseTriangulo
);
const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);

console.log(
  `Los lados del Triangulo miden: 
    ${ladoTriangulo1}cm, 
    ${ladoTriangulo2}cm, 
    ${baseTriangulo}cm`
);
console.log(`El perimetro del Triangulo es: ${perimetroTriangulo}cm`);
console.log(`El Area del Triangulo es: ${areaTriangulo}cm^2`);

console.groupEnd();

// Circulo
console.group('Circulo:');

const radioCirculo = 4;
const PI = Math.PI;

const calcularPerimetroCirculo = (radio) => radio * 2 * PI;
const calcularAreaCirculo = (radio) => radio ** 2 * PI;

const perimetroCirculo = calcularPerimetroCirculo(radioCirculo);
const areaCirculo = calcularAreaCirculo(radioCirculo);

console.log(`El radio del Circulo es: ${radioCirculo}cm`);
console.log(`El Perimetro del Circulo es: ${perimetroCirculo}cm`);
console.log(`El Area del Circulo es: ${areaCirculo}cm^2`);

console.groupEnd();
