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