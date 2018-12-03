import { Component, OnInit, Input } from '@angular/core';
import { Docente } from 'src/app/ModuloSolicitud/clases/Docente';
import { Instituto } from 'src/app/model/Instituto';
import { AdminserviceService } from 'src/app/ServiceAdmin/adminservice.service';
import { DocenteserviceService } from 'src/app/ServiceDocente/docenteservice.service';
import { RestResponse } from 'src/app/model/RestResponse';

@Component({
  selector: 'app-vista-listado-docentes',
  templateUrl: './vista-listado-docentes.component.html',
  styleUrls: ['./vista-listado-docentes.component.css']
})
export class VistaListadoDocentesComponent implements OnInit {

  @Input()instituto: Instituto;

  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'eliminar'];
  datasourse = new Array<Docente>();

  restResponse: RestResponse=new RestResponse();
  constructor(private serviceAdmin: AdminserviceService, private servideDocente: DocenteserviceService) { }

  ngOnInit() {
    this.servideDocente.traerDocentes(this.instituto).subscribe(
      Response=>{
        console.log(Response);
        this.restResponse=Response;
        this.datasourse=<Array<Docente>>this.restResponse.message;
      });
  }

  eliminar(docente: Docente) {
    const opcion = confirm('¿ Está seguro de eliminar este Docente ?');
    if (opcion) {
      const nuevo: Array<Docente> = new Array<Docente>();
      for (const item in this.datasourse) {
        if (this.datasourse[item].email !== docente.email) {
          nuevo.push(this.datasourse[item]);
        } else {
          this.serviceAdmin.borrarDocente(this.datasourse[item]).subscribe(
            Response=>{
              console.log(Response);
            }
          ); 
        }
      }
      this.datasourse = nuevo;
    }
  }

}
