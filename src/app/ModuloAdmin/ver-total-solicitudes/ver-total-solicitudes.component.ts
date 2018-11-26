import { Component, OnInit, ViewChild } from '@angular/core';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { MockSolicitudes, MockAlumno } from 'src/app/ModuloSolicitud/clases/Mock';
import { VerDetallesComponent } from '../ver-detalles/ver-detalles.component';

@Component({
  selector: 'app-ver-total-solicitudes',
  templateUrl: './ver-total-solicitudes.component.html',
  styleUrls: ['./ver-total-solicitudes.component.css']
})
export class VerTotalSolicitudesComponent implements OnInit {

  mockSolicitud: MockSolicitudes = new MockSolicitudes();

  //////////////////////////////////////////////////////////////////////////

  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'carrera'];
  datasourse = new Array<Solicitud>();

  selected = 0;
  showtable = true;
  showcargando = false;

  @ViewChild(VerDetallesComponent) verDetalle: VerDetallesComponent;

  constructor() {
    this.datasourse = [
      this.mockSolicitud.solicitud1,
      this.mockSolicitud.solicitud2,
      this.mockSolicitud.solicitud3,
    ];
  }

  ngOnInit() {
  }

  cargar(e: Solicitud) {
    console.log(e);
    this.verDetalle.cargarSolicitud(e);
    this.selected = 1;
  }

}
