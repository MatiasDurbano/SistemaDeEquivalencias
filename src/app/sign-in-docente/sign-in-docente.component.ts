import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SignInService } from '../ServiceSignIn/sign-in.service';
import { RestResponse } from '../model/RestResponse';
import { Instituto } from '../model/Instituto';

@Component({
  selector: 'app-sign-in-docente',
  templateUrl: './sign-in-docente.component.html',
  styleUrls: ['./sign-in-docente.component.css'],
  providers: [SignInService]
})
export class SignInDocenteComponent implements OnInit {

  restResponse: RestResponse;
  Institutos: Array<Instituto>;
  
  constructor(private router: Router, private SignInService:SignInService) { 
    this.SignInService.cargarInstitutos().subscribe(
      Response=>{
        this.Institutos=Response;
      })
   }
  input;

  ngOnInit() {
    
    this.input = {
      nombre:'',
      apellido:'',
      username:'',
      mail:'',
      password:''

    }
  }
  registrar() {
   
    if(this.validate()){
       this.SignInService.registrar(this.input).subscribe(
         Response => {
          this.restResponse=Response;
          console.log(this.restResponse);
          if(this.restResponse.response==409){
            alert('Usuario o nombre y apellido de docente ya registrados')
          }
          if(this.restResponse.response==200){
            alert('Registrado exitosamente ')
          }
          
        },
        error=> console.log('error',error)
         );
       }
       else{
         console.log("no se guardo los datos")
       }
    
}

cargar(event: any){
  this.input.instituto=event;
}

  validate ():Boolean{
  let ret = true;
  
  if(this.input.nombre==""){
    alert('ingrese nombre')
    ret=false;
  }
    
  if(this.input.apellido==""){
    alert('ingrese apellido')
    ret = false;
  }
  if(this.input.mail==""){
    alert('ingrese mail')
    ret =false;
  }
  if(this.input.username==""){
    alert('ingrese username')
    ret = false;
  }
  if(this.input.password==""){
    alert('ingrese password')
    ret = false;
  }
  if(this.input.instituto==""){
    alert('seleccione instituto')
    ret = false;
  }
  return ret;
}

}