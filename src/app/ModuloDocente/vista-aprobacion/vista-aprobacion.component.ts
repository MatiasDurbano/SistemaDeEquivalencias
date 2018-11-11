import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { Alumno } from 'src/app/ModuloSolicitud/clases/Alumno';
import { AsignaturaUNGS } from 'src/app/ModuloSolicitud/clases/AsignaturaUNGS';
import { AsignaturaEquivalente } from 'src/app/ModuloSolicitud/clases/AsignaturaEquivalente';
import { FormControl, Validators, FormGroup } from '@angular/forms';

export interface Aprobacion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vista-aprobacion',
  templateUrl: './vista-aprobacion.component.html',
  styleUrls: ['./vista-aprobacion.component.css']
})

export class VistaAprobacionComponent implements OnInit {

  maxi: Alumno = new Alumno (
    'Maximiliano',
    'Pompilio',
    39071820,
    '39071820/2014',
    1150290821,
    'maxi.pompilio@gmail.com',
    'Licenciatura en Sistema',
    null,
    null
  );
  sor: AsignaturaEquivalente = new AsignaturaEquivalente(
    'Sistemas Operativos',
    'UTN',
    2005,
    128,
    'hola'
  );
  redes: AsignaturaEquivalente = new AsignaturaEquivalente(
    'Redes de la Informacion',
    'UTN',
    2005,
    128,
    'hola'
  );
  sistemaOperativosII: AsignaturaUNGS = new AsignaturaUNGS(
    'Sistemas Operativos II',
    [this.sor, this.redes]
  );

  materias: Array<AsignaturaUNGS> = new Array<AsignaturaUNGS>();
  solicitud: Solicitud;

  displayedColumns: string[] = ['nombre', 'institutoOrigen', 'anoAprobacion', 'cargaHoraria'];
  dataSource: Array<AsignaturaEquivalente>;

  opciones: Aprobacion[] = [
    {value: 'aprobado', viewValue: 'Aprobado'},
    {value: 'desaprobado', viewValue: 'Desaprobado'},
    {value: 'coloquio', viewValue: 'Coloquio'}
  ];

  aprobacion: FormControl = new FormControl('', Validators.required);
  razon: FormControl = new FormControl('', Validators.required);

  constructor() {
    this.materias.push(this.sistemaOperativosII);
    this.solicitud = new Solicitud (this.maxi, this.materias);
    this.dataSource = this.solicitud.asignaturasUNGS[0].equivalencias;
  }

  ngOnInit() {
  }

  comprobar() {
    if (this.aprobacion.value !== 'aprobado' && this.razon.invalid) {
      alert('Por favor, escriba una razon');
    } else {
      console.log('hola');
    }
  }
}
