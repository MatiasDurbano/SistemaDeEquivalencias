import { Component, OnInit, ViewChild } from '@angular/core';
import { FormularioAlumnoComponent } from '../formulario-alumno/formulario-alumno.component';
import { FormularioEquivalenciaComponent } from '../formulario-equivalencia/formulario-equivalencia.component';
import { Solicitud } from '../clases/Solicitud';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';
import { RestResponse } from 'src/app/model/RestResponse';


@Component({
  selector: 'app-paso-apaso-solicitud',
  templateUrl: './paso-apaso-solicitud.component.html',
  styleUrls: ['./paso-apaso-solicitud.component.css'],
  providers: [SolicitudService]
})
export class PasoAPasoSolicitudComponent implements OnInit {

  @ViewChild(FormularioAlumnoComponent) formularioAlumno: FormularioAlumnoComponent;
  @ViewChild(FormularioEquivalenciaComponent) formularioEquivalencia: FormularioEquivalenciaComponent;

  restResponse: RestResponse;

  constructor(private serviceSolicitud: SolicitudService) { }

  ngOnInit() {
  }

  generarSolicitud(): Solicitud {
    const ret = new Solicitud(this.formularioAlumno.generarAlumno(),
    this.formularioEquivalencia.tablaAsignaturaUNGS.generarArregloAsignaturaUNGS());

    console.log(ret);

    this.serviceSolicitud.registrarSolicitud(ret).subscribe(
      Response => {
        this.restResponse=Response;
        if(this.restResponse.response==200){
          alert("El codigo de seguimiento es: " +this.restResponse.message)
        }
        else{
          alert(this.restResponse.message);
        }
      })
    return ret;
  }

}
