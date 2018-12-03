import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/ModuloAdmin/model/Administrador';
import { MockAdministrador } from 'src/app/ModuloSolicitud/clases/Mock';
import { AdminserviceService } from 'src/app/ServiceAdmin/adminservice.service';
import { RestResponse } from 'src/app/model/RestResponse';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-vista-listado-admin',
  templateUrl: './vista-listado-admin.component.html',
  styleUrls: ['./vista-listado-admin.component.css']
})
export class VistaListadoAdminComponent implements OnInit {

  mockAdministrador: MockAdministrador = new MockAdministrador();

  ///////////////////////////////////////////////////////////////////////////////////////

  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'instituto', 'eliminar'];
  datasourse = new Array<Administrador>();

  aEliminar = new Array<Administrador>();

  replica = new Array<Administrador>();
  restResponse = new RestResponse();
  constructor(private serviceAdmin: AdminserviceService) {
   
  }

  ngOnInit() {
    this.obtenerAllAdmin().then(resultado=>{
      this.datasourse=<Array<Administrador>>resultado;
    });
  }

  obtenerAllAdmin(){
    return new Promise((resultado) => {
      this.serviceAdmin.traerTodos().subscribe(
        Response=>{
          this.restResponse=Response;
          resultado(this.restResponse.message)
                });
      });
  }

  eliminar(administrador: Administrador) {
    const opcion = confirm('¿ Está seguro de eliminar este Administrador ?');
    if (opcion) {
      const nuevo: Array<Administrador> = new Array<Administrador>();
      for (const item in this.datasourse) {
        if (this.datasourse[item].email !== administrador.email) {
          nuevo.push(this.datasourse[item]);
        } else {
          this.serviceAdmin.borrar(this.datasourse[item]).subscribe(
            Response=>{
              console.log(Response);
            }
          );
          this.aEliminar.push(this.datasourse[item]);
        }
      }
      this.datasourse = nuevo;
    }
  }

  confirmar() {
  }

}
