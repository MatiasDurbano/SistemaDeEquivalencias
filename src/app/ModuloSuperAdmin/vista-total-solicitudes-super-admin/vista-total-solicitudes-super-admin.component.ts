import { Component, OnInit, ViewChild } from '@angular/core';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { VerDetallesComponent } from 'src/app/ModuloAdmin/ver-detalles/ver-detalles.component';
import { MockSolicitudes } from 'src/app/ModuloSolicitud/clases/Mock';

@Component({
  selector: 'app-vista-total-solicitudes-super-admin',
  templateUrl: './vista-total-solicitudes-super-admin.component.html',
  styleUrls: ['./vista-total-solicitudes-super-admin.component.css']
})
export class VistaTotalSolicitudesSuperAdminComponent implements OnInit {

  mockSolicitud: MockSolicitudes = new MockSolicitudes();

  //////////////////////////////////////////////////////////////////////////

  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'carrera'];
  datasourse = new Array<Solicitud>();

  selected = 0;
  showtable = true;
  showcargando = false;

  @ViewChild(VerDetallesComponent) verDetalle: VerDetallesComponent;

  constructor() {
    this.datasourse = [this.mockSolicitud.solicitud1, this.mockSolicitud.solicitud2, this.mockSolicitud.solicitud3];
  }

  ngOnInit() {
  }

  cargar(e: Solicitud) {
    console.log(e);
    this.verDetalle.cargarSolicitud(e);
    this.selected = 1;
  }

}
