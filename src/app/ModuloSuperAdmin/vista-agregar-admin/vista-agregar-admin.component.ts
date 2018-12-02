import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Administrador } from 'src/app/ModuloAdmin/model/Administrador';

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

  institutos: Array<Opciones> = [
    {viewValue: 'ICO', value: 'ico'},
    {viewValue: 'IDH', value: 'idh'},
    {viewValue: 'ICI', value: 'ici'},
    {viewValue: 'IDEI', value: 'idei'}
  ];

  constructor() { }

  ngOnInit() {
  }

  agregar() {

    if (this.formAdmin.valid) {
      const nuevo: Administrador = new Administrador();
      nuevo.nombre = this.formAdmin.get('nombre').value;
      nuevo.apellido = this.formAdmin.get('nombre').value;
      nuevo.email = this.formAdmin.get('nombre').value;
      nuevo.instituto = this.formAdmin.get('nombre').value;

      const usuario = this.formAdmin.get('usuario').value;
      const constraseña = this.formAdmin.get('contraseña').value;

      location.reload();
    } else {
      alert('Algunos campos no fueron completados correctamente');
    }
  }
}
