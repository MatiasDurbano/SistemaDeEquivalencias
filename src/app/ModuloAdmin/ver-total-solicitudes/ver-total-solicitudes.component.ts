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
  showtable = false;
  showcargando = true;

  restResponse: RestResponse;

  @ViewChild(VerDetallesComponent) verDetalle: VerDetallesComponent;

  constructor(private serviceAdmin: AdminserviceService) {
  }

  ngOnInit() {
    this.TraerSolicitudes().then(resultado=>{
      this.solicitudes=<Array<Solicitud>>resultado;
      this.datasourse=this.solicitudes;
      console.log(this.datasourse);
    });
  }

  TraerSolicitudes(){
    return new Promise((resultado) => {
    this.serviceAdmin.traerSolicitudes(this.instituto).subscribe(
      Response=>{
        this.restResponse=Response;
        console.log(this.restResponse);
        resultado(this.restResponse.message)
              });
    });
    
  }
  cargar(e: Solicitud) {
    console.log(e);
    this.verDetalle.cargarSolicitud(e);
    this.selected = 1;
  }

}
