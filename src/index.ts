import { Estudiante } from "./models/estudiante";
import { Curso } from "./models/cursos";
import { LISTA_CURSOS } from "./mock/clases.mock";


const cursoReact: Curso = new Curso("React", 34)
const listaCursos: Curso[] = LISTA_CURSOS

const jasubi: Estudiante = new Estudiante("jasubi", listaCursos, "Piñeyro")

console.log(`${jasubi.nombre} estudia:`)
jasubi.cursos.forEach((curso: Curso) =>{
  console.log(`- ${curso.nombre} (${curso.horas}) horas`)
})

jasubi.cursos.push(cursoReact)

//conocer horas estudiadas de jasubi

jasubi.horasEstudiadas