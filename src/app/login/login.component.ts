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
          this.gotoInstituto(this.userLogeado);
       }  
        },
      error=> console.log('error',error)
    );
  }

  gotoInstituto(user: userModelo) {
    this.router.navigate(['/vista-add-materia/:instituto', { inst :user.instituto}]);
  }
}
