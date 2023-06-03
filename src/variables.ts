// Variables son tipadas y no se puede cambiar el tipo de dato una vez asignado

let nombre: string = 'jasubip'

console.log(`Hola ${nombre}`)
console.log(`Si eres ${nombre} ?`)

const PI: number = 3.1416

/**
 * con any se puede cambiar el tipo de dato
 * Si no se indica el typo de dato, por defecto sera "any"
*/
var apellido: any = "piñeyro"

apellido = 3

console.log(`Tu apellido es ${apellido}`)

//variables booleana
var error: boolean;
error = false

console.log(`El error es: ${error}`)

//Instanciacion Multiple

let a:string, b:number ,c:boolean

a = "texto"
b = 22
c = true

console.log(a, b, c)

//BuiltIn Types: number, string, bolean, void, null y undefined

//Tipos complejos

//Listas de string
let listaTareas: string[] = ["tarea1", "tarea2"]

//Conbinacion de tipos
let valores: (string | number | boolean)[] = [false, "hola", true, 17] 

//Enumerados

enum Estados{
  "Completado" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P"
}

enum PuestoCarrera{
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let estadoTarea: Estados = Estados.Completado
let puestoMaraton:PuestoCarrera = PuestoCarrera.Segundo

//Interfaces - Son clases

interface Tarea{
  nombre: string,
  estado: Estados,
  urgencia: number
}

//Podemos crear tareas con la interface

let tarea1: Tarea = {
  nombre: "Tarea 1",
  estado: Estados.Pendiente,
  urgencia: 10
}

//Types de Typescript 

type Producto = {
  precio: number,
  nombre: string
  caducidad: number
}

let coca: Producto = {
  nombre: "Cocacola",
  precio: 18,
  caducidad: 2022
}

//Condicionales

//Ternarios
console.log(coca.caducidad < 2023 ? `La ${coca.nombre} caduco en ${coca.caducidad}` : 'Fresca')

//estandar

if(error){
  console.log('Hay un error')
}else{
  console.log('No hay error')
}

//Bucles

let listaTareasNueva: Tarea[] =[
  {
    nombre: "Tarea1",
    estado: Estados.Completado,
    urgencia: 1
  },
  {
    nombre: "Tarea2",
    estado: Estados.Pendiente,
    urgencia: 5
  },
  {
    nombre: "Tarea3",
    estado: Estados.Completado,
    urgencia: 3
  }
]

listaTareasNueva.forEach((tarea: Tarea, index:number) =>{
  console.log(`${index} - ${tarea.nombre}`)
})