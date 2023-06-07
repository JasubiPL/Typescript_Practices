//Functions
function  saludar(){
  console.log('Hola Jasubi')
}

saludar()

/**
 * Funcion que saluda a un usuario
 * @param nombre nombre de usuario
 */
function  saludarUsuario(nombre: string){
  console.log(`hola ${nombre}`)
}

saludarUsuario("JasubiP")

/**
 * Funcion que despde a un usuario
 * @param nombre nombre de usuario opcional, por defecto sera pepe
 */
function  despedirUsuario(nombre: string = "Pepe"){
  console.log(`Adios ${nombre}`)
}

despedirUsuario()

/**
 * Funcion con para metros opcionales
 * @param nombre nombre de usuario (opcional)
 */
function despedidaOpcional(nombre?: string){
  if(nombre){
    console.log(`Adios ${nombre}`)
  }else{
    console.log('Adios')
  }
}

despedidaOpcional()
despedidaOpcional("Jas")

function datosContacto(nombre: string, email: string, edad?: number,){
  if(edad){
    console.log(`Hola ${nombre} con email ${email}, tienes ${edad}`)
  }else{
    console.log(`Hola ${nombre} con email ${email}`)
  }
}

datosContacto("jasubi", "Jasubi.com")
datosContacto("jasubi", "Jasubi.com", 26)

/**
 * 
 * @param apellidos Apellidos del usuario
 * @param nombre nombre del usuario
 * @returns nombre completo del usuario
 */
function ejemploReturn(apellidos: string, nombre?: string): string{
  return `${nombre} ${apellidos}`
}

const nombreCompleto = ejemploReturn("Piñeyro","Jasubi")

console.log(nombreCompleto)

/**
 * 
 * @param nombres es una lista de nombres en string
 */

function ejemploMultiParam(...nombres: string[]): void{
  nombres.forEach((nombre) =>{
    console.log(nombre)
  })
}

ejemploMultiParam("Jasubi", "Lehem", "Piñeyro", "Legaspi")

//Arrow function

type Empleado = {
  nombre: string,
  apellido: string,
  edad: number
}

let empleadoMartin: Empleado = {
  nombre: "Martin",
  apellido: "Santa Cruz",
  edad: 30
}

const mostrarEmpleado = (empleado: Empleado): string => `${empleado.nombre} tiene ${empleado.edad} años`

console.log(mostrarEmpleado(empleadoMartin))

const datosEmpleado = (empleado: Empleado): string =>{
  if(empleado.edad > 70){
    return `Empleado ${empleado.nombre} esta en edad de juvilacion`
  }else{
    return `Empleado ${empleado.nombre} esta en edad laboral`
  }
}

console.log(datosEmpleado(empleadoMartin))