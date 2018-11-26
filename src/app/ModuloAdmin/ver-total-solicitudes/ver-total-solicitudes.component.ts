import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { MockSolicitudes, MockAlumno } from 'src/app/ModuloSolicitud/clases/Mock';
import { VerDetallesComponent } from '../ver-detalles/ver-detalles.component';
import { Instituto } from 'src/app/model/Instituto';
import { AdminserviceService } from 'src/app/ServiceAdmin/adminservice.service';
import { RestResponse } from 'src/app/model/RestResponse';

@Component({
  selector: 'app-ver-total-solicitudes',
  templateUrl: './ver-total-solicitudes.component.html',
  styleUrls: ['./ver-total-solicitudes.component.css']
})
export class VerTotalSolicitudesComponent implements OnInit {
  
  mockSolicitud: MockSolicitudes = new MockSolicitudes();

  //////////////////////////////////////////////////////////////////////////

  @Input()instituto: Instituto;

  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'carrera'];
  datasourse = new Array<Solicitud>();

  solicitudes: Array<Solicitud>;

  selected = 0;
  showtable = true;
  showcargando = false;

  restResponse: RestResponse;

  @ViewChild(VerDetallesComponent) verDetalle: VerDetallesComponent;

  constructor(private serviceAdmin: AdminserviceService) {
    this.datasourse = this.solicitudes;
  }

  ngOnInit() {
    this.TraerSolicitudes();
  }
  TraerSolicitudes(){
    this.serviceAdmin.traerSolicitudes(this.instituto).subscribe(
      Response=>{
        this.restResponse=Response;
        console.log(this.restResponse);
        this.solicitudes=<Array<Solicitud>>this.restResponse.message
      }
    )
  }
  cargar(e: Solicitud) {
    console.log(e);
    this.verDetalle.cargarSolicitud(e);
    this.selected = 1;
  }

}
