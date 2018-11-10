import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { AsignaturaEquivalente } from '../clases/AsignaturaEquivalente';
import { TablaAsignaturaEquivalenteComponent } from '../tabla-asignatura-equivalente/tabla-asignatura-equivalente.component';
import { TablaAsignaturaUNGSComponent } from '../tabla-asignatura-ungs/tabla-asignatura-ungs.component';
import { AsignaturaUNGS } from '../clases/AsignaturaUNGS';

@Component({
  selector: 'app-formulario-equivalencia',
  templateUrl: './formulario-equivalencia.component.html',
  styleUrls: ['./formulario-equivalencia.component.css']
})
export class FormularioEquivalenciaComponent implements OnInit {

  @ViewChild(TablaAsignaturaEquivalenteComponent) tablaAsignaturaEquivalente: TablaAsignaturaEquivalenteComponent;
  @ViewChild(TablaAsignaturaUNGSComponent) tablaAsignaturaUNGS: TablaAsignaturaUNGSComponent;

  formAsignaturaEquivalente: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    institutoOrigen: new FormControl('', Validators.required),
    anoAprobacion: new FormControl('', [ Validators.required, Validators.pattern('[0-9]*') ]),
    cargaHoraria: new FormControl('', [ Validators.required, Validators.pattern('[0-9]*') ])
  });

  formAsignaturaUNGS: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  generarAsignaturaEquivalente(): AsignaturaEquivalente {
    const ret: AsignaturaEquivalente = new AsignaturaEquivalente(
      this.formAsignaturaEquivalente.get('nombre').value,
      this.formAsignaturaEquivalente.get('institutoOrigen').value,
      this.formAsignaturaEquivalente.get('anoAprobacion').value,
      this.formAsignaturaEquivalente.get('cargaHoraria').value,
    );
    return ret;
  }

  generarAsignaturaUNGS(): AsignaturaUNGS {
    const ret: AsignaturaUNGS = new AsignaturaUNGS(
      this.formAsignaturaUNGS.get('nombre').value,
      this.tablaAsignaturaEquivalente.generarArregloAsignaturaEquivalente()
    );
    return ret;
  }

  agregarAsignaturaEquvalente() {
    this.tablaAsignaturaEquivalente.add(this.generarAsignaturaEquivalente());
    this.formAsignaturaEquivalente.reset();
  }

  borrarAsignaturaEquvalente() {
    this.tablaAsignaturaEquivalente.remove();
  }

  agregarAsignaturaUNGS() {
    this.tablaAsignaturaUNGS.add(this.generarAsignaturaUNGS());
    this.formAsignaturaUNGS.reset();
  }

  borrarAsignaturaUNGS() {
    this.tablaAsignaturaUNGS.remove();
  }

  tablaAsignaturaUNGSEstaVacio(): boolean {
    return this.tablaAsignaturaUNGS.estaVacio();
  }

  saludar() {
    console.log(this.generarAsignaturaEquivalente().saludar());
  }

}
