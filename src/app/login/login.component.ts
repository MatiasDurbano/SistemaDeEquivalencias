import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceLoginService } from '../serviceLogin/service-login.service';
import { userModelo } from '../model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServiceLoginService]

})
export class LoginComponent implements OnInit {

  private userLogeado: userModelo;

  constructor(private router: Router, private serviceLogin:ServiceLoginService) { }
  
  user;
  
  ngOnInit() {  
    this.user = {
      id:'',
      username:'',
      password:''
    };
  }

  login(){
    console.log(this.user.username+' '+this.user.password);
    this.serviceLogin.loginUser(this.user).subscribe(
      Response => {
        this.userLogeado = Response;
        console.log(this.userLogeado.tipo)
        if(this.userLogeado.tipo==1){
          this.router.navigate(["sesion-docente"]);
         }
         if(this.userLogeado.tipo==0){
          this.router.navigate(["seguimiento-solicitud"]);
         }  
        },
      error=> console.log('error',error)
    );

    /*
    if (this.user.username == 'admin' && this.user.password == 'admin'){
     this.router.navigate(["pasoApaso"]);
    }
    else if (this.user.username == 'pepe' && this.user.password == 'pepe'){
      this.router.navigate(["sesion-docente"]);
    }
    else if (this.user.username == 'seguimiento' && this.user.password == 'seguimiento'){
      this.router.navigate(["seguimiento-solicitud"]);
    }
    else {
      alert("Invalid credentials");
    }
    */
  }
}
