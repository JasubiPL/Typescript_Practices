import { Curso } from "./cursos";

export class Estudiante {

  //Propiedades de clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[];

  //Constrctor
  constructor(nombre: string, cursos: Curso[], apellidos?: string){
    //Inicializamos las propiedades
    this.nombre = nombre
    if(apellidos){
      this.apellidos = apellidos
    }
    this.cursos = cursos
  }

  get horasEstudiadas(): number{
    let horasEstudiadas: number = 0

    this.cursos.forEach((curso: Curso) =>{
      horasEstudiadas += curso.horas
    })

    return horasEstudiadas
  }
}