import { Component, OnInit, ViewChild } from '@angular/core';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { Alumno } from 'src/app/ModuloSolicitud/clases/Alumno';
import { AsignaturasUNGS } from 'src/app/ModuloSolicitud/clases/AsignaturasUNGS';
import { AsignaturaEquivalente } from 'src/app/ModuloSolicitud/clases/AsignaturaEquivalente';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { saveAs } from 'file-saver';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';

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
    '',
    '',
    0,
    '',
    0,
    '',
    '',
    null,
    null
  );
  sor: AsignaturaEquivalente = new AsignaturaEquivalente(
    '',
    '',
    null,
    null,
    'hola'
  );
  redes: AsignaturaEquivalente = new AsignaturaEquivalente(
    '',
    '',
    null,
    null,
    'hola'
  );
  sistemaOperativosII: AsignaturasUNGS = new AsignaturasUNGS(
    '',
    [this.sor]
  );

  materias: Array<AsignaturasUNGS> = new Array<AsignaturasUNGS>();
  solicitud: Solicitud;

  displayedColumns: string[] = ['nombre', 'institutoOrigen', 'anoAprobacion', 'cargaHoraria', 'descarga'];
  dataSource: Array<AsignaturaEquivalente>;

  opciones: Aprobacion[] = [
    {value: 'aprobado', viewValue: 'Aprobado'},
    {value: 'desaprobado', viewValue: 'Desaprobado'},
    {value: 'coloquio', viewValue: 'Coloquio'}
  ];

  aprobacion: FormControl = new FormControl('', Validators.required);
  razon: FormControl = new FormControl('', Validators.required);

  constructor(private serviceSolicitud: SolicitudService) {
    this.materias.push(this.sistemaOperativosII);
    this.solicitud = new Solicitud (this.maxi, this.materias);
    this.dataSource = this.solicitud.asignaturasUNGS[0].equivalencias;
  }

  ngOnInit() {
  }

  cargarSolicitud(solicitud: Solicitud) {

    this.solicitud = solicitud;
    this.dataSource = this.solicitud.asignaturasUNGS[0].equivalencias;
  }

  downloadFile (e: AsignaturaEquivalente) {
    saveAs(e.documentacion, 'test.pdf');
  }

  comprobar() {
    if (this.aprobacion.value !== 'aprobado' && this.razon.invalid) {
      alert('Por favor, escriba una razon');
    } else {
      this.solicitud.asignaturasUNGS[0].comentario = this.razon.value;
      this.solicitud.asignaturasUNGS[0].estado = this.aprobacion.value;
      console.log(this.solicitud);
      this.serviceSolicitud.actualizarSolicitud(this.solicitud).subscribe(
       Response => {
        console.log(Response);
       });
    }
  }
}
