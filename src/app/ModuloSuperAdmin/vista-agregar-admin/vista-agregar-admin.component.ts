import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Administrador } from 'src/app/ModuloAdmin/model/Administrador';
import { AdminserviceService } from 'src/app/ServiceAdmin/adminservice.service';
import { Instituto } from 'src/app/model/Instituto';
import { RestResponse } from 'src/app/model/RestResponse';

export interface Opciones {
  viewValue: string;
  value: string;
}

@Component({
  selector: 'app-vista-agregar-admin',
  templateUrl: './vista-agregar-admin.component.html',
  styleUrls: ['./vista-agregar-admin.component.css']
})
export class VistaAgregarAdminComponent implements OnInit {

  formAdmin: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    instituto: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
    contraseña: new FormControl('', Validators.required),
  });

  restResponse:RestResponse= new RestResponse();
  institutos: Array<Instituto>;

  constructor(private serviceAdmin: AdminserviceService) { }

  ngOnInit() {
    this.traerTodosInstitutos();
  }

  agregar() {

    if (this.formAdmin.valid) {
      const nuevo: Administrador = new Administrador();
      nuevo.nombre = this.formAdmin.get('nombre').value;
      nuevo.apellido = this.formAdmin.get('apellido').value;
      nuevo.email = this.formAdmin.get('email').value;
      nuevo.instituto = this.formAdmin.get('instituto').value;

      const usuario = this.formAdmin.get('usuario').value;
      const constraseña = this.formAdmin.get('contraseña').value;
      nuevo.usuario=usuario;
      nuevo.contraseña=constraseña;
      console.log(nuevo);
      this.serviceAdmin.agregar(nuevo).subscribe(
      Response=>{
        console.log(Response);
      });
      
    } else {
      alert('Algunos campos no fueron completados correctamente');
    }
  }

  traerTodosInstitutos(){
    this.serviceAdmin.traerTodosInstitutos().subscribe(
      Response=>{
        console.log(Response);
        this.restResponse=Response;
        this.institutos=<Array<Instituto>>this.restResponse.message;
      });
  }
}
