import { Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';
import { alumnoModelo } from '../model/Alumno.model';

export interface Selector {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {
  constructor(private router: Router) { }


  nombreFormControl = new FormControl('', [
    Validators.required
  ]);
  apellidoFormControl = new FormControl('', [
    Validators.required
  ]);
  numeroFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*')
  ]);
  legajoFormControl = new FormControl('', [
    Validators.required
  ]);
  telefonoFormControl = new FormControl('', [
    Validators.required
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  tipoDocumento: Selector[] = [{value: 'dni-0', viewValue: 'DNI'}];
  
  
  data;
  alumno;
  ngOnInit() { 
  this.alumno= new alumnoModelo();

  this.data={
    nombre:"",
    apellido:"",
    numero:"",
    legajo:"",
    telefono:"",
    email:""

  }

}
  siguiente(): void {
 
    this.router.navigate(["equivalencia-solicitadas"]);
  }

  getAlumno():alumnoModelo{
    
    return this.alumno;
  }
}
