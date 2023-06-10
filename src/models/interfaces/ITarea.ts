export enum Niveles{
  "Informativa",
  "Urgente",
  "Para_Ya"
}

export interface ITarea {

  titulo: string,
  descripcion?: string,
  status: boolean,
  urgencia?: Niveles,
  resumen: () => string

}