// Código del cuadrado
console.group("Cuadrados");
/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");*/

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos")
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriiangulo = 5.5;
console.log("La altura del triángulo es de " + alturaTriiangulo + "cm");*/

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
//console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El área del triángulo mide: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

/* Radio
const radioCirculo = 4;
console.log("El radio del círculo es de " + radioCirculo + "cm");*/

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
} 
//console.log("El diámetro del círculo es de " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
//console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//console.log("El perímetro del círculo mide: " + perimetroCirculo + "cm");

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El área del círculo mide: " + areaCirculo + "cm^2");

console.groupEnd();

// Aquí interactuamos con el HTML

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("lado1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("lado2")
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("base")
    const value3 = parseInt(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("base");
    const value1 = input1.value;
    const input2 = document.getElementById("altura");
    const value2 = input2.value;
    const area = areaTriangulo(value1, value2);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}