import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';
import { Email } from 'src/app/model/Email';
import { AdminserviceService } from 'src/app/ServiceAdmin/adminservice.service';
import { Administrador } from '../model/Administrador';
import { RestResponse } from 'src/app/model/RestResponse';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.css']
})

export class VistaGeneralComponent implements OnInit {
  email: Email;
  administrador: Administrador;
  restResponse: RestResponse;

  mostrarTotalAsignaturas = true;
  mostrarVerSeguimiento = true;
  mostrarDocente = true;
  mostrarAsignarAsignatura = true;
  mostrarAgregarAsignatura = true;

  constructor(private serviceAdmin: AdminserviceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.email = new Email(params['Email']);
    });
   this.buscarAdmin().then(result => {
    }); 


  }

  buscarAdmin() {
     return new Promise((resultado) => {
      this.serviceAdmin.traerAdmin(this.email).subscribe(
        Response => {
          this.restResponse = Response;
          this.administrador = <Administrador>this.restResponse.message;
          resultado(this.administrador);
        });
      });
  }

  totalAsignaturas() {
    this.mostrarDocente = true;
    this.mostrarAsignarAsignatura = true;
    this.mostrarAgregarAsignatura = true;
    this.mostrarVerSeguimiento = true;
    this.mostrarTotalAsignaturas = false;
  }


  verSeguimiento() {
    // this.router.navigate(['consulta']);
    this.mostrarTotalAsignaturas = true;
    this.mostrarDocente = true;
    this.mostrarAsignarAsignatura = true;
    this.mostrarAgregarAsignatura = true;
    this.mostrarVerSeguimiento = false;
  }

  registrarDocente() {
    this.mostrarTotalAsignaturas = true;
    this.mostrarVerSeguimiento = true;
    this.mostrarAsignarAsignatura = true;
    this.mostrarAgregarAsignatura = true;
    this.mostrarDocente = false;
  }

  asignarAsignaturas() {
    this.mostrarTotalAsignaturas = true;
    this.mostrarVerSeguimiento = true;
    this.mostrarDocente = true;
    this.mostrarAgregarAsignatura = true;
    this.mostrarAsignarAsignatura = false;
  }

  agregarAsignaturas() {
    // this.router.navigate(['vista-add-materia/:instituto', { instituto : 'algo'}]);
    this.mostrarTotalAsignaturas = true;
    this.mostrarVerSeguimiento = true;
    this.mostrarDocente = true;
    this.mostrarAsignarAsignatura = true;
    this.mostrarAgregarAsignatura = false;
  }


  salir() {
    this.router.navigate(['']);
  }
}
