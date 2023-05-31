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

//Tipos complejos
let listaTareas: string[] = ["tarea1", "tarea2"]