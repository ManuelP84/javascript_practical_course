
console.group("Square");

function perimetroCuadrado(lado) {
    return lado * 4;
}

var areaCuadrado = (lado) => lado * lado; //Usando arrow function


// console.log(
//     "Los lados del cuadrado miden: " 
//     + ladoCuadrado 
//     + "cm."
//     );

// console.log("El perímetro del cuadrado es de : " 
// + perimetroCuadrado
// + "cm."
// );

// onsole.log(
//     "El área del cuadrado es de: " 
//     + areaCuadrado 
//     + "cm2."
//     );
console.groupEnd();


console.group("Triangle");

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}

var areaTriangulo = (base, altura) => (base * altura)/2; //Usando arrow function

function hightTriangle(side1, base){
    value1 = Math.pow(side1,2);
    value2 = (Math.pow(base, 2))/4;
    hight = Math.sqrt(value1 - value2);
    return hight;
}


// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, " 
//     + ladoBase + "cm."
//     );
// console.log(
//     "El perimetro del triangulo es: " 
//     + perimetroTriangulo + "cm"
//     );

// console.log(
//     "La altura del triángulo es de: " 
//     + alturaTriangulo + " cm."
//     );

// console.log(
//     "El área del triangulo es de: " 
//     + areaTriangulo 
//     + " cm2."
//     );
console.groupEnd();


console.group("Circle");
const PI = Math.PI;

function areaCircle(radio) {
    return PI*radio*radio;
}

var perimeterCircle = (radio) => 2*PI*radio; //Usando arrow function


// console.log(
//     "El radio del circulo es de: " 
//     + radioCirculo 
//     + " cm."
//     );

// console.log(
//     "El valor de Pi es de: " 
//     + PI
//     );

// console.log(
//     "El perímetro del circulo es de: " 
//     + perimeterCircle 
//     + " cm."
//     );

// console.log(
//     "El área del circulo es de: " 
//     + areaCircle 
//     + " cm2"
//     );
console.groupEnd();



//Interacting with HTML and javascript

function calcularPerimetroCuadrado() {

    const input = document.getElementById("inputSquare");
    const value = input.value;

    if(Number.isNaN(value) || value == 0){
        alert("Please enter a valid number!")
    }

    else{
        const perimeter = perimetroCuadrado(value);
        const text = document.getElementById("perimeterSquareResult");
        text.innerText = "The square perimeter is: " + perimeter;
    }
}


function calcularAreaCuadrado() {

    const input = document.getElementById("inputSquare");
    const value = input.value;

    if(Number.isNaN(value) || value == 0){
        alert("Please enter a valid number!")
    }

    else{
        const area = areaCuadrado(value);
        const text = document.getElementById("areaSquareResult");
        text.innerText = "The square area is: " + area;
    }
}

function calcularPerimetroTriangulo(){

    const input1 = document.getElementById("inputTriangleSide1");
    const side1 = input1.value;

    const input2 = document.getElementById("inputTriangleSide2");
    const side2 = input2.value;

    const input3 = document.getElementById("inputTriangleBase");
    const base = input3.value;

    if(
        Number.isNaN(side1) 
        || side1 == 0
        || Number.isNaN(side2)
        || side2 == 0
        || Number.isNaN(base)
        || base == 0
        )
    {
        alert("Please enter a valid number!")
    }

    else{
        const perimeter = perimetroTriangulo(side1, side2, base);
        const text = document.getElementById("perimeterTriangleResult");
        text.innerText = "The triangle perimeter is: " + perimeter;
    }
    
}

function calculateAreaTriangle(){
    const input1 = document.getElementById("inputTriangleSide1");
    const side1 = input1.value;

    const input2 = document.getElementById("inputTriangleSide2");
    const side2 = input2.value;

    const input3 = document.getElementById("inputTriangleBase");
    const base = input3.value;

    if(
        Number.isNaN(side1) 
        || side1 == 0
        || Number.isNaN(side2)
        || side2 == 0
        || Number.isNaN(base)
        || base == 0
        )
    {
        alert("Please enter a valid number!")
    }

    else if(side1 != side2){
        alert("The tiangle is not isosceles");
    }

    else{
        const hight = hightTriangle(side1, base);
        const area = areaTriangulo(base, hight);
        const text = document.getElementById("areaTriangleResult");
        text.innerText = "The triangle area is: " + area;
    }

}

function calcularAlturaTriangulo() {

    const input1 = document.getElementById("inputTriangleSide1");
    const side1 = input1.value;

    const input2 = document.getElementById("inputTriangleSide2");
    const side2 = input2.value;

    const input3 = document.getElementById("inputTriangleBase");
    const base = input3.value;

    if(
        Number.isNaN(side1) 
        || side1 == 0
        || Number.isNaN(side2)
        || side2 == 0
        || Number.isNaN(base)
        || base == 0
        )
    {
        alert("Please enter a valid number!")
    }

    else if(side1 != side2){
        alert("The tiangle is not isosceles");
    }

    else{
        const hight = hightTriangle(side1, base);        
        const text = document.getElementById("hightTriangleResult");
        text.innerText = "The triangle hight is: " + hight;
        
    }

}

function calculatePerimeterCircle(){

    const input = document.getElementById("inputCircleRadio");
    const value = input.value;
    
    if(Number.isNaN(value) || value == 0){
        alert("Please enter a valid number!");
    }

    else{
        const perimeter = perimeterCircle(value);
        text = document.getElementById("perimeterCircleResult");
        text.innerText = "The circle perimeter is: " + perimeter;
    }   
}

function calculateAreaCircle(){

    const input = document.getElementById("inputCircleRadio");
    const value = input.value;

    if(Number.isNaN(value) || value == 0){
        alert("Please enter a valid number!");
    }

    else{
        const area = areaCircle(value);
        const text = document.getElementById("areaCircleResult");
        text.innerText = "The circle area is: " + area;
    }
}