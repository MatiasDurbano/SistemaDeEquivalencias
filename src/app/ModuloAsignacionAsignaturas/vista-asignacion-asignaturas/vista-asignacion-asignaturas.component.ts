import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/ModuloSolicitud/clases/Docente';

@Component({
  selector: 'app-vista-asignacion-asignaturas',
  templateUrl: './vista-asignacion-asignaturas.component.html',
  styleUrls: ['./vista-asignacion-asignaturas.component.css']
})
export class VistaAsignacionAsignaturasComponent implements OnInit {

  datasourceDocente: Array<Docente> = new Array<Docente>();
  displayedColumnsDocente: string[] = ['nombre', 'apellido', 'email'];

  datasourceAsignaturas: Array<string> = new Array<string>();
  displayedColumnsAsignaturas: string[] = ['nombre', 'eliminar'];

  asignaturas: Array<string> = new Array<string>();

  showAsignaturas = false;

  docenteActual: Docente;
  asignaturaNueva: string;

  constructor() {
    // Traer todos los docentes con arreglo de materias incluido
    this.datasourceDocente = [
      {nombre: 'Oscar', apellido: 'Ernesto', email: 'xD@.com', asignaturas: ['calculo', 'probabilidad', 'computacion']},
      {nombre: 'Maxi', apellido: 'Javier', email: 'xD@.com', asignaturas: ['ingieneria', 'historia', 'matematica']},
    ];

    // Trae todo el arrelgo de materias que maneja ese insituto
    this.asignaturas = ['calculo', 'probabilidad', 'discreta', 'logica', 'lengua'];
  }

  ngOnInit() {
  }

  mostrarAsignaturas(docente: Docente) {
    this.docenteActual = docente;
    this.datasourceAsignaturas = this.docenteActual.asignaturas;
    this.showAsignaturas = true;
    console.log(this.docenteActual);
  }

  borrarAsignatura(asignatura: string) {
    const nuevo: Array<string> = new Array<string>();
    for (const item in this.datasourceAsignaturas) {
      if (this.datasourceAsignaturas[item] !== asignatura) {
        console.log(this.datasourceAsignaturas[item]);
        nuevo.push(this.datasourceAsignaturas[item]);
      }
    }
    this.datasourceAsignaturas = nuevo;
  }

  agregarAsignatura() {
    let encontrado = false;
    for (const item in this.datasourceAsignaturas) {
      if (this.datasourceAsignaturas[item] === this.asignaturaNueva) {
        encontrado = true;
      }
    }
    if (!encontrado) {
      this.datasourceAsignaturas = this.datasourceAsignaturas.concat(this.asignaturaNueva);
    }
  }

  ocultar() {
    this.showAsignaturas = false;
  }

  guardar(): Docente {
    this.docenteActual.asignaturas = this.datasourceAsignaturas;
    console.log(this.docenteActual);
    return this.docenteActual;
  }

}
