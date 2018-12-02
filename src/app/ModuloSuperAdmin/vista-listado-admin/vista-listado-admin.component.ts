import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/ModuloAdmin/model/Administrador';
import { MockAdministrador } from 'src/app/ModuloSolicitud/clases/Mock';

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

  constructor() {
    this.datasourse = [this.mockAdministrador.administrador1, this.mockAdministrador.administrador2,
      this.mockAdministrador.administrador3, this.mockAdministrador.administrador4];
  }

  ngOnInit() {
  }

  eliminar(administrador: Administrador) {
    const opcion = confirm('¿ Esta seguro de eliminar este Administrador ?');
    if (opcion) {
      const nuevo: Array<Administrador> = new Array<Administrador>();
      for (const item in this.datasourse) {
        if (this.datasourse[item].email !== administrador.email) {
          nuevo.push(this.datasourse[item]);
        } else {
          this.aEliminar.push(this.datasourse[item]);
        }
      }
      this.datasourse = nuevo;
    }
  }

  confirmar() {
  }

}
