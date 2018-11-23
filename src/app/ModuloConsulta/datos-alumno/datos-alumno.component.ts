import { Component, OnInit, ViewChild } from '@angular/core'
import { Alumno } from 'src/app/ModuloSolicitud/clases/Alumno';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CodigoAlumno } from '../Clases/CodigoAlumno';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { TablaConsultaComponent } from '../tabla-consulta/tabla-consulta.component';
import { AsignaturasUNGS } from 'src/app/ModuloSolicitud/clases/AsignaturasUNGS';
import { RestResponse } from 'src/app/model/RestResponse';

@Component({
  selector: 'app-datos-alumno',
  templateUrl: './datos-alumno.component.html',
  styleUrls: ['./datos-alumno.component.css']
})
export class DatosAlumnoComponent implements OnInit {
  
  alumno:Alumno=new Alumno("aa","aa",1123,"aa",1234,"aa","aa","aa","aa",);
  mostrar: Boolean;
  nombre:String;
  codigoAlumno:CodigoAlumno=new CodigoAlumno();
  solicitud:Solicitud=new Solicitud(null,null);
  listaAsignaturas: Array<AsignaturasUNGS>;
  restResponse:  RestResponse;
  

  @ViewChild(TablaConsultaComponent) tablaSolicitudes: TablaConsultaComponent;

  constructor(private serviceSolicitud: SolicitudService,private route: ActivatedRoute,
    private router: Router) {
    
  }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.codigoAlumno.codigo=params['codigo'];
    });
    this.cargar();
  }



  cargar(){
    
    this.restResponse=new RestResponse();
    this.serviceSolicitud.consultarPorCodigo(this.codigoAlumno).subscribe(
      Response => {
        console.log(Response);
        this.restResponse=Response;
        if(this.restResponse.response==200){
          this.solicitud=<Solicitud>this.restResponse.message;
          this.mostrar=true;

          this.listaAsignaturas=new Array<AsignaturasUNGS>();
          this.listaAsignaturas=this.solicitud.asignaturasUNGS;
         
          for(let asignaturaUngs of this.listaAsignaturas){
              this.tablaSolicitudes.cargar(asignaturaUngs);
            }
          }
        else{
          alert("Codigo no encontrado");
          this.router.navigate(['/consulta']);
        }
      });

  }

}
