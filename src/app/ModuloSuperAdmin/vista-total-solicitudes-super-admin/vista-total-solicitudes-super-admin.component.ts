import { Component, OnInit, ViewChild } from '@angular/core';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { VerDetallesComponent } from 'src/app/ModuloAdmin/ver-detalles/ver-detalles.component';
import { MockSolicitudes } from 'src/app/ModuloSolicitud/clases/Mock';
import { AdminserviceService } from 'src/app/ServiceAdmin/adminservice.service';
import { RestResponse } from 'src/app/model/RestResponse';

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
  restResponse: RestResponse;
  solicitudes: Array<Solicitud>;
  @ViewChild(VerDetallesComponent) verDetalle: VerDetallesComponent;

  constructor(private serviceAdmin: AdminserviceService) {
  }

  ngOnInit() {
    this.TraerSolicitudes().then(resultado=>{
      this.solicitudes=<Array<Solicitud>>resultado;
      this.datasourse=this.solicitudes;
      console.log(this.datasourse);
      this.showtable = true;
      this.showcargando = false;
    });
  }

  cargar(e: Solicitud) {
    console.log(e);
    this.verDetalle.cargarSolicitud(e);
    this.selected = 1;
  }

  TraerSolicitudes(){
    return new Promise((resultado) => {
    this.serviceAdmin.traerTodasSolicitudes().subscribe(
      Response=>{
        this.restResponse=Response;
        console.log(this.restResponse);
        resultado(this.restResponse.message)
              });
    });

}
}
