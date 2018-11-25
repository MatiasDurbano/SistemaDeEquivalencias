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
  email:Email;
  administrador: Administrador;
  restResponse : RestResponse;

  constructor(private serviceAdmin: AdminserviceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.email=new Email(params['Email']);
    });
   this.buscarAdmin().then(result=>{
    console.log(result);
    });

      
  }

  buscarAdmin(){
     return new Promise((resultado) =>{
      this.serviceAdmin.traerAdmin(this.email).subscribe(
        Response =>{
          this.restResponse=Response;
          this.administrador=<Administrador>this.restResponse.message;
          resultado(this.administrador);
        })
        
      });
  }

  verSeguimiento() {
    this.router.navigate(['consulta']);
  }

  registrarDocente() {
    this.router.navigate(['signInDocente']);
  }

  asignarAsignaturas() {
    this.router.navigate(['/VistaAsignacion/:instituto', { instituto : 'algo'}]);
  }

  agregarAsignaturas() {
    this.router.navigate(['vista-add-materia/:instituto', { instituto : 'algo'}]);
  }

  salir() {
  }
}
