import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-formlogindocente',
  templateUrl: './formlogindocente.component.html',
  styleUrls: ['./formlogindocente.component.css']
})
export class FormlogindocenteComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {
  }

  loginDocente(e) {
    e.preventDefault();
    var ret=false;
    var usuario = e.target.elements[0].value;
    var clave = e.target.elements[1].value;
    if(usuario=="pepe"){
      ret=true;
      console.log(usuario, clave);
      this.router.navigate(['sesion-docente']);

    }
    
    return ret;
  }
  
}
