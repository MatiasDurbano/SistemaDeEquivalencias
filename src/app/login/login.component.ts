import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceLoginService } from '../serviceLogin/service-login.service';
import { userModelo } from '../model/user.model';
import { RestResponse } from '../model/RestResponse';
import { UsuarioResponse } from '../model/UsuarioResponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServiceLoginService]

})
export class LoginComponent implements OnInit {

  private userLogeado: userModelo;
  restResponse: RestResponse= new RestResponse();
  usuarioResponse: UsuarioResponse;

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
        
        this.restResponse=Response;
        if(this.restResponse.response==200){
            this.usuarioResponse =<UsuarioResponse> this.restResponse.message;
            if(this.usuarioResponse.tipo==1){
              this.gotoDocente(this.usuarioResponse);
            }
            if(this.usuarioResponse.tipo==0){
              this.gotoAdmin(this.usuarioResponse);
            }
            if(this.usuarioResponse.tipo==3){
              this.gotoSuperAdmin();
            }  
        }
        else{
          alert("Usuario y contraseña no encontrado");
        }
    
    });
  }
  gotoAdmin(user: UsuarioResponse) {
    this.router.navigate(['VistaAdmin/:usuario', { Email :user.email}]);
  }

  gotoDocente(user: UsuarioResponse){
    this.router.navigate(["sesion-docente/:email",{Email :user.email}]);
  }
  
  gotoSuperAdmin(){
    this.router.navigate(["VistaSuperAdmin"]);
  }
}
