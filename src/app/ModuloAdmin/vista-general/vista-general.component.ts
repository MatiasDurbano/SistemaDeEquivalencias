import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.css']
})
export class VistaGeneralComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verSeguimiento() {
    this.router.navigate(['consulta']);
  }

  registrarDocente() {
    this.router.navigate(['signInDocente']);
  }

  asignarAsignaturas() {
    this.router.navigate(['/VistaAsignacion/:instituto', { instituto : 'algo'}]);
  }

  agregarAsignaturas() {
    this.router.navigate(['vista-add-materia/:instituto', { instituto : 'algo'}]);
  }

  salir() {
  }
}
