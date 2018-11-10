import { Component, OnInit, ViewChild } from '@angular/core';
import { FormularioAlumnoComponent } from '../formulario-alumno/formulario-alumno.component';
import { FormularioEquivalenciaComponent } from '../formulario-equivalencia/formulario-equivalencia.component';
import { Solicitud } from '../clases/Solicitud';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';


@Component({
  selector: 'app-paso-apaso-solicitud',
  templateUrl: './paso-apaso-solicitud.component.html',
  styleUrls: ['./paso-apaso-solicitud.component.css'],
  providers: [SolicitudService]
})
export class PasoAPasoSolicitudComponent implements OnInit {

  @ViewChild(FormularioAlumnoComponent) formularioAlumno: FormularioAlumnoComponent;
  @ViewChild(FormularioEquivalenciaComponent) formularioEquivalencia: FormularioEquivalenciaComponent;

  constructor(private serviceSolicitud: SolicitudService) { }

  ngOnInit() {
  }

  generarSolicitud(): Solicitud {
    const ret = new Solicitud(this.formularioAlumno.generarAlumno(),
    this.formularioEquivalencia.tablaAsignaturaUNGS.generarArregloAsignaturaUNGS());

    console.log(ret);

    this.serviceSolicitud.registrarSolicitud(ret).subscribe(
      Response => {
          const respuesta: String = Response;
          console.log(respuesta);
      });
    console.log(ret);
    return ret;
  }

}
