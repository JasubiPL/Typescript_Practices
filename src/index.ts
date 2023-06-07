import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils'

//Sobrecarga de funciones

function mostrarError(error: string | number){
  console.log(error)
}

//Persistencia de datos
//1. Local Storage --> Almacena los datos en el navegador (No se eliminan en automatico)
//2. Session Storage --> Almacena los datos en el navegador hasta que se cierra el navegador
//3. Cookies --> Tienen una fecha de caducidad y un ambito de url que nos permite saber quien podra acceder a los datos

//Local storage
// function guardarLocalStorage(): void{
//   localStorage.set("nombre", "Martin")
  
// }

// function leerLocalStorage(): void{
//   const nombre = localStorage.get("nombre")
// }


//Cookies

const cookie = {
  name: "usuario",
  value: "Jasubi",
  expires: new Date(2024, 7, 17),
  path: "/"
}

//enviamos cookie
setCookie(cookie)

//Eliminamos cookie
deleteCookie("usuario")

//Eliminar todas las cookies
deleteAllCookies()

//Leer una cookie
let usuario = getCookieValue("usuario")

//clase Tempórizador
class Temporizador {
  public terminar?: () => void

  public empezar(): void {

    setTimeout(() => {

      if(!this.terminar) return

      //Cuando se termine el tiempo se ejecutara la funcion terminar si es que existe
      this.terminar();

    }, 10000)

  }
}

const miTemporizador: Temporizador = new Temporizador()

miTemporizador.terminar = () => {
  console.log("Hemos terminado la tarea")
}

miTemporizador.empezar()

//eliminar ejecucion
delete miTemporizador.terminar