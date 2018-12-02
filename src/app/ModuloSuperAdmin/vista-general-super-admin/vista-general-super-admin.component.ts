import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-general-super-admin',
  templateUrl: './vista-general-super-admin.component.html',
  styleUrls: ['./vista-general-super-admin.component.css']
})
export class VistaGeneralSuperAdminComponent implements OnInit {

  mostrarTotalSolicitudes = true;
  mostrarListadoAdmin = true;

  constructor() { }

  ngOnInit() {
  }

  verTotalSolicitudes() {
    this.mostrarListadoAdmin = true;
    this.mostrarTotalSolicitudes = false;
  }

  verListadoAdmin() {
    this.mostrarTotalSolicitudes = true;
    this.mostrarListadoAdmin = false;
  }

}
