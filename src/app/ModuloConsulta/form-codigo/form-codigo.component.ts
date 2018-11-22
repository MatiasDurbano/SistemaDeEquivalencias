import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { CodigoAlumno } from '../Clases/CodigoAlumno';
import { Alumno } from 'src/app/ModuloSolicitud/clases/Alumno';
import { DatosAlumnoComponent } from '../datos-alumno/datos-alumno.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-codigo',
  templateUrl: './form-codigo.component.html',
  styleUrls: ['./form-codigo.component.css'],
  providers: [SolicitudService]
})
export class FormCodigoComponent implements OnInit {
  @ViewChild(DatosAlumnoComponent) datosAlumno: DatosAlumnoComponent;

  formCodigo: FormGroup = new FormGroup({
  codigo: new FormControl('', Validators.required)});

  codigoAlumno:CodigoAlumno;
 

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  Consultar(){

    this.router.navigate(['/datoAlumno/:codigo', { codigo :this.formCodigo.get("codigo").value}]);
  }

}
