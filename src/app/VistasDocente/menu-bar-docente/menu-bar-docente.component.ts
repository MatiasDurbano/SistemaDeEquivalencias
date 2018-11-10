import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-bar-docente',
  templateUrl: './menu-bar-docente.component.html',
  styleUrls: ['./menu-bar-docente.component.css']
})
export class MenuBarDocenteComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,private router:Router) {}
  

  goMisMaterias(){
  	this.router.navigate(['form-materia-docente']);
  }
  salir(){
    this.router.navigate(['']);
  }

  }
