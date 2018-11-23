import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { AsignaturaEquivalente } from '../clases/AsignaturaEquivalente';
import { TablaAsignaturaEquivalenteComponent } from '../tabla-asignatura-equivalente/tabla-asignatura-equivalente.component';
import { TablaAsignaturaUNGSComponent } from '../tabla-asignatura-ungs/tabla-asignatura-ungs.component';
import { AsignaturasUNGS } from '../clases/AsignaturasUNGS';

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

  documentacion: string = null;

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
      this.documentacion
    );
    console.log(ret.saludar());
    return ret;
  }

  generarAsignaturaUNGS(): AsignaturasUNGS {
    const ret: AsignaturasUNGS = new AsignaturasUNGS(
      this.formAsignaturaUNGS.get('nombre').value,
      this.tablaAsignaturaEquivalente.generarArregloAsignaturaEquivalente()
    );
    console.log(ret);

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
    this.tablaAsignaturaEquivalente.limpiar();
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

  leerArchivo(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.obtenerArchivoValor.bind(this);
      reader.readAsDataURL(file);
    }
  }

  obtenerArchivoValor(e) {
    this.documentacion = e.target.result;
  }

}
