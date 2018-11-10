import { Component, OnInit, ViewChild } from '@angular/core';
import { TablaMateriasDocenteComponent } from '../tabla-materias-docente/tabla-materias-docente.component';


@Component({
  selector: 'app-form-materia-docente',
  templateUrl: './form-materia-docente.component.html',
  styleUrls: ['./form-materia-docente.component.css']
})
export class FormMateriaDocenteComponent implements OnInit {


 @ViewChild(TablaMateriasDocenteComponent) tablaMateria: TablaMateriasDocenteComponent;


  constructor() { }

  ngOnInit() {
  }

  agregarMateria(e){
  	e.preventDefault();
  	this.tablaMateria.addElement(e.target.elements[0].value);

  }

}
