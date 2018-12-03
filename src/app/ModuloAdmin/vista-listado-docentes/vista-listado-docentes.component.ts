import { Component, OnInit, Input } from '@angular/core';
import { Docente } from 'src/app/ModuloSolicitud/clases/Docente';
import { Instituto } from 'src/app/model/Instituto';

@Component({
  selector: 'app-vista-listado-docentes',
  templateUrl: './vista-listado-docentes.component.html',
  styleUrls: ['./vista-listado-docentes.component.css']
})
export class VistaListadoDocentesComponent implements OnInit {

  @Input()instituto: Instituto;

  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'eliminar'];
  datasourse = new Array<Docente>();

  constructor() { }

  ngOnInit() {
  }

  eliminar(docente: Docente) {
    const opcion = confirm('¿ Está seguro de eliminar este Docente ?');
    if (opcion) {
      const nuevo: Array<Docente> = new Array<Docente>();
      for (const item in this.datasourse) {
        if (this.datasourse[item].email !== docente.email) {
          nuevo.push(this.datasourse[item]);
        } else {
/*           this.serviceAdmin.borrar(this.datasourse[item]).subscribe(
            Response=>{
              console.log(Response);
            }
          ); */
        }
      }
      this.datasourse = nuevo;
    }
  }

}
