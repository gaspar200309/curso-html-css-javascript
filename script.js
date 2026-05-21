// VARIABLES

const nombre = "Curso de Javascript"
let edad = 25
var ciudad = "La Paz"

console.log(nombre)
console.log(edad)
console.log(ciudad)

// TIPOS DE DATOS

const texto = "Hola"
const numero = 100
const decimal = 10.5
const verdadero = true
const falso = false
const nulo = null
let indefinido

console.log(typeof texto)
console.log(typeof numero)
console.log(typeof verdadero)

// OPERADORES

const suma = 10 + 5
const resta = 10 - 5
const multiplicacion = 10 * 5
const division = 10 / 5

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)

// CONDICIONALES

if (edad >= 18) {
  console.log("Es mayor de edad")
} else {
  console.log("Es menor de edad")
}

// SWITCH

const dia = "lunes"

switch (dia) {
  case "lunes":
    console.log("Inicio de semana")
    break

  case "viernes":
    console.log("Fin de semana")
    break

  default:
    console.log("Día normal")
}

// CICLOS

// FOR

for (let i = 1; i <= 5; i++) {
  console.log("Número:", i)
}

// WHILE

let contador = 1

while (contador <= 3) {
  console.log("While:", contador)
  contador++
}

// FUNCIONES

function saludar(nombre) {
  return `Hola ${nombre}`
}

console.log(saludar("Carlos"))

// ARROW FUNCTIONS

const sumar = (a, b) => {
  return a + b
}

console.log(sumar(5, 10))

// ARRAYS

const frutas = [
  "Manzana",
  "Pera",
  "Banana"
]

console.log(frutas)

console.log(frutas[0])

// AGREGAR ELEMENTO
frutas.push("Sandía")

console.log(frutas)

// RECORRER ARRAYS

frutas.forEach((fruta) => {
  console.log(fruta)
})

// MAP

const numeros = [1, 2, 3, 4]

const duplicados = numeros.map((numero) => {
  return numero * 2
})

console.log(duplicados)

// FILTER

const mayores = numeros.filter((numero) => {
    /* if(numero > 2) {
        return true
    } else {
        return false
    } */
  return numero > 2
})

console.log(mayores)

// OBJETOS

const usuario = {
  nombre: "Juan",
  edad: 20,
  ciudad: "Cochabamba"
}

console.log(usuario)

console.log(usuario.nombre)

// DESESTRUCTURACIÓN

const { ciudad: ciudadUsuario } = usuario

console.log(ciudadUsuario)

// TEMPLATE STRINGS

const mensaje = `Hola ${usuario.nombre}, tienes ${usuario.edad} años`

console.log(mensaje)

// EVENTOS DEL DOM

const boton = document.querySelector("#btnSaludo")

if (boton) {

  boton.addEventListener("click", () => {
    alert("Hola desde JavaScript")
  })

}

// LOCAL STORAGE

localStorage.setItem("usuario", "Armando")

const usuarioGuardado = localStorage.getItem("usuario")

console.log(usuarioGuardado)

// FECHA



// JSON

const objeto = {
  nombre: "Pedro",
  edad: 30
}

const convertirJSON = JSON.stringify(objeto)

console.log(convertirJSON)

const convertirObjeto = JSON.parse(convertirJSON)

console.log(convertirObjeto)


// SPREAD OPERATOR

const numeros1 = [1, 2, 3]
const numeros2 = [4, 5, 6]

const combinados = [
  ...numeros1,
  ...numeros2
]

console.log(combinados)

// OPERADOR REST

function sumarTodos(...numeros) {

  return numeros.reduce((acc, num) => acc + num, 0)

}

console.log(sumarTodos(1, 2, 3, 4, 5))

// CLASES

class Persona {

  constructor(nombre, edad) {

    this.nombre = nombre
    this.edad = edad

  }

  saludar() {

    console.log(`Hola soy ${this.nombre} tengo ${this.edad} años`)

  }

}

const persona1 = new Persona("Luis", 22)

persona1.saludar()
