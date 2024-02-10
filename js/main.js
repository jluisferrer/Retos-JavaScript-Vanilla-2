//Retos JavaScript Vanilla II


// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
// valores necesarios para calcular el área. Para ello has de crear un método por cada figura
// para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado


// let figura = prompt("Introduce una figura para calcular el area : circulo, cuadrado o triangulo")

// if (figura === "circulo") {
//     const PI = 3.1415
//     let radioCirculo = parseFloat(prompt("Introduce el radio del circulo aqui"))
//     let aCirculo = PI * (radioCirculo ** 2)
//     console.log("El area del circulo es =", aCirculo)
// } else if (figura === "cuadrado") {

//     let ladoCuadrado = parseFloat(prompt("Introduce el lado del cuadrado aqui"))
//     let aCuadrado = ladoCuadrado + ladoCuadrado
//     console.log("El area del cuadrado es =", aCuadrado)

// } else if (figura === "triangulo") {
//     let baseTriangulo = parseFloat(prompt("Introduce la base del triangulo aqui"))
//     let alturaTriangulo = parseFloat(prompt("Introduce la altura del triangulo aqui"))
//     let aTriangulo = (baseTriangulo * alturaTriangulo) / 2
//     console.log("El area del triangulo es =", aTriangulo)
// } else {
//     console.log("Fallo introduce los datos correctamente")
// }

// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre qué
// números queremos que los genere, podemos pedirlas al usuario antes de generar los
// números. Este método devolverá un número entero aleatorio. Muestra estos números por
// consola.


// const cantidad = parseInt(prompt("¿Cuántos números aleatorios quieres generar?"))
// const infNum = parseInt(prompt("¿Entre qué números quieres que se generen? Pon el más bajo"))
// const supNum = parseInt(prompt("¿Entre qué números quieres que se generen? Pon el más alto"))
// const generaRandom = (liminf, limsup, cant) => {
//     for(let i = 1; i <= cantidad; i++){
//         console.log((Math.random()*(limsup-liminf)+liminf).toFixed(2))
//     }
// }
// generaRandom(infNum, supNum, cantidad)



// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
// por parámetro para que nos indique si es o no un número primo, debe devolver true si es
// primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
// ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

// let num = parseInt(prompt("Introduce tu numero para saber si es primo"))

// if (num <= 1) {
//     console.log("El numero debe ser mayor que 1")
// } else {

//     let esPrimo = true;

// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         esPrimo = false;
//         break; //no es primo salimos del bucle
//     } 
// }
//     if (esPrimo) {
//         console.log("Felicidades tu numero es primo")
//     }
//     else {
//         console.log("Lo sentimos tu numero no es primo")
//     }
// }

// let num = parseInt(prompt("Introduce tu numero para saber si es primo"))

// if (num <= 0) {
//     console.log("El numero introducido debe ser mayor que 1")
// } else {
//     let esPrimo = true;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             esPrimo = false;
//             break;
//         }
//     }
//     if (esPrimo) {
//         console.log("Tu numero es primo")
//     } else {
//          console.log("tu numero no es primo") }
// }

// 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número como parámetro. Para calcular
// el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si
// introducimos un 5, realizará esta operación 5*4*3*2*1=120.

// let num = parseInt(prompt("Introduce un numero entero para saber su factorial"))
// let factorial = 1

// for (let i = num ;  i>0 ; i--) {
//     factorial *= i;   
// } console.log(parseInt(factorial));