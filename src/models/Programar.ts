import { ITarea, Niveles } from "./interfaces/ITarea";

class Programar implements ITarea{
  titulo: string;
  descripcion?: string | undefined;
  status: boolean;
  urgencia?: Niveles;
  
  
  constructor(titulo: string, descripcion: string, status: boolean, urgencia: Niveles){
    this.titulo = titulo
    this.descripcion = descripcion
    this.status = status
    this.urgencia = urgencia
  }

  resumen = () => {
    return `${this.titulo} con urgencia ${this.urgencia}`
  };
}

let programarTS = new Programar("Typescript", "Estamos aprendiendo Typescript", true, Niveles.Para_Ya)
console.log(programarTS.resumen())