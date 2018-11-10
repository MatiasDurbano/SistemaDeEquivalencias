import { Component, OnInit, ViewChild  } from '@angular/core';
import { TablaMateriaEquivalenciaComponent } from '../tabla-materia-equivalencia/tabla-materia-equivalencia.component';


@Component({
  selector: 'app-form-materia-equivalencia',
  templateUrl: './form-materia-equivalencia.component.html',
  styleUrls: ['./form-materia-equivalencia.component.css']
})
export class FormMateriaEquivalenciaComponent implements OnInit {
	
  universidad: string;
  materiaCurso: string;
  carrera: string;
  materiaUNGS: string;
  plan: string;
	
  @ViewChild(TablaMateriaEquivalenciaComponent) tablaMateria: TablaMateriaEquivalenciaComponent;

  constructor() { 
    this.plan="si";}


  ngOnInit() {
  }

  formEquivalencia(e){
  	e.preventDefault();
  	this.universidad = e.target.elements[0].value;
  	this.materiaCurso = e.target.elements[3].value;
  	this.carrera = e.target.elements[4].value;
  	this.materiaUNGS = e.target.elements[5].value;
  	console.log(this.universidad, this.materiaCurso, this.carrera, this.materiaUNGS);
    this.tablaMateria.addElement(this.universidad,this.materiaCurso,this.materiaUNGS,"si");
  }

}
