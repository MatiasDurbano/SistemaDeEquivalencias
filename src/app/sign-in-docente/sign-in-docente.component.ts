import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SignInService } from '../ServiceSignIn/sign-in.service';

@Component({
  selector: 'app-sign-in-docente',
  templateUrl: './sign-in-docente.component.html',
  styleUrls: ['./sign-in-docente.component.css'],
  providers: [SignInService]
})
export class SignInDocenteComponent implements OnInit {

  constructor(private router: Router, private SignInService:SignInService) { }

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
          
        },
        error=> console.log('error',error)
        );
      }
      else{
        console.log("no se guardo los datos")
      }
    
}

  validate (){
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
  return ret;
}
}
