import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/ModuloSolicitud/clases/Docente';

@Component({
  selector: 'app-vista-asignacion-asignaturas',
  templateUrl: './vista-asignacion-asignaturas.component.html',
  styleUrls: ['./vista-asignacion-asignaturas.component.css']
})
export class VistaAsignacionAsignaturasComponent implements OnInit {

  datasource: Array<Docente> = new Array<Docente>();
  displayedColumns: string[] = ['nombre', 'apellido', 'email'];

  constructor() {
    this.datasource = [
      {nombre: 'Oscar', apellido: 'Ernesto', email: 'xD@.com', listaMateria: null},
    ];
  }

  ngOnInit() {
  }

}
