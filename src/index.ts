import { ITarea, Niveles } from "./models/interfaces/ITarea";

//Uso de interfaces

let programar: ITarea = {
  titulo: "Typescripe",
  status: true,
  urgencia: Niveles.Urgente,
  resumen: function (): string {
    return `${this.titulo} - ${this.status} - Nivel ${this.urgencia}`
  }
}