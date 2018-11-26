import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Alumno } from '../clases/Alumno';
import { InsitutoUNGS } from '../clases/InstitutoUNGS';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css'],
  providers: [SolicitudService]
})
export class FormularioAlumnoComponent implements OnInit {

  cap: string;

  formAlumno: FormGroup = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    dni: new FormControl('', [ Validators.required, Validators.pattern('[0-9]*') ]),
    legajo: new FormControl('', Validators.required),
    telefono: new FormControl('', [ Validators.required, Validators.pattern('[0-9]*') ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    carrera: new FormControl('', Validators.required),
    recaptcha: new FormControl(null, Validators.required),
  });
  documentacion: string = null;
  analitico: string = null;

  institutosUNGS: Array<InsitutoUNGS>;

  constructor(private serviceSolicitud: SolicitudService) {
    this.serviceSolicitud.solicitarCarreras().subscribe(
      Response => {
        this.institutosUNGS = Response;
      });
/*     this.institutosUNGS = [{nombre: 'IDEI', carreras: ['Licenciatura en Sistemas']}]; */
  }

  ngOnInit() {
  }

  generarAlumno(): Alumno {
    const ret: Alumno = new Alumno(
      this.formAlumno.get('nombres').value,
      this.formAlumno.get('apellidos').value,
      this.formAlumno.get('dni').value,
      this.formAlumno.get('legajo').value,
      this.formAlumno.get('telefono').value,
      this.formAlumno.get('email').value,
      this.formAlumno.get('carrera').value,
      this.documentacion,
      this.analitico
    );
    console.log(this.documentacion);
    return ret;
  }

  saludar() {
    console.log(this.generarAlumno());
  }

  leerArchivoDocumentacion(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.obtenerArchivoDocumentacionValor.bind(this);
      reader.readAsDataURL(file);
    }
  }

  obtenerArchivoDocumentacionValor(e) {
    this.documentacion = e.target.result;
  }

  leerArchivoAnalitico(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.obtenerArchivoAnaliticoValor.bind(this);
      reader.readAsDataURL(file);
    }
  }

  obtenerArchivoAnaliticoValor(e) {
    this.analitico = e.target.result;
  }

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.cap = captchaResponse;
    this.formAlumno.get('recaptcha').setValue(this.cap);
  }

}
