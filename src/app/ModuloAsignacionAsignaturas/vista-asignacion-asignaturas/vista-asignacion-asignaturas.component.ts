import { Component, OnInit, Input } from '@angular/core';
import { Docente } from 'src/app/ModuloSolicitud/clases/Docente';
import { DocenteserviceService } from 'src/app/ServiceDocente/docenteservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Instituto } from 'src/app/model/Instituto';
import { RestResponse } from 'src/app/model/RestResponse';
import { ListaMateria } from 'src/app/model/ListaMateria';
import { MateriaPost } from 'src/app/model/MateriaPost';

@Component({
  selector: 'app-vista-asignacion-asignaturas',
  templateUrl: './vista-asignacion-asignaturas.component.html',
  styleUrls: ['./vista-asignacion-asignaturas.component.css']
})
export class VistaAsignacionAsignaturasComponent implements OnInit {

restResponse: RestResponse;

  @Input()instituto: Instituto;
  datasourceDocente: Array<Docente> = new Array<Docente>();
  displayedColumnsDocente: string[] = ['nombre', 'apellido', 'email'];

  datasourceAsignaturas: Array<string> = new Array<string>();
  displayedColumnsAsignaturas: string[] = ['nombre', 'eliminar'];

  asignaturas: Array<string> = new Array<string>();
  materias: MateriaPost= new MateriaPost();


  showAsignaturas = false;

  docenteActual: Docente;
  asignaturaNueva: string;

  constructor(private docenteService :DocenteserviceService,private route: ActivatedRoute,private router: Router) {
  
  }

  ngOnInit() {/* 
    this.route.params.subscribe(params => {
      this.instituto=new Instituto(params['inst']);
    }); */
    this.docenteService.traerDocentes(this.instituto).subscribe(
      Response =>{
        console.log("TRAIGO TODOS LOS DOCENTE");
        console.log(Response)
        this.restResponse=Response;
        this.datasourceDocente= <Array<Docente>>this.restResponse.message;
      });


      this.docenteService.traerMateriasPorInstituto(this.instituto).subscribe(
        Response =>{
          
          this.restResponse=Response;
          this.materias=<MateriaPost>this.restResponse.message;
          console.log(this.restResponse.message);
          this.asignaturas=this.materias.materias;
          console.log("ASIGNATURAS");
          console.log(this.asignaturas)
        });
  }


  buscarDocentes(){
    return new Promise((resultado) =>{
      this.docenteService.traerDocentes(this.instituto).subscribe(
        Response =>{
          console.log("TRAIGO TODOS LOS DOCENTE");
          console.log(Response)
          this.datasourceDocente=Response;
          resultado(this.datasourceDocente);
        });
     });  
    }


  mostrarAsignaturas(docente: Docente) {
    this.docenteActual = docente;
    this.datasourceAsignaturas = this.docenteActual.asignaturas;
    this.showAsignaturas = true;
    console.log(this.docenteActual);
  }

  borrarAsignatura(asignatura: string) {
    const nuevo: Array<string> = new Array<string>();
    for (const item in this.datasourceAsignaturas) {
      if (this.datasourceAsignaturas[item] !== asignatura) {
        console.log(this.datasourceAsignaturas[item]);
        nuevo.push(this.datasourceAsignaturas[item]);
      }
    }
    this.datasourceAsignaturas = nuevo;
  }

  agregarAsignatura() {
    let encontrado = false;
    for (const item in this.datasourceAsignaturas) {
      if (this.datasourceAsignaturas[item] === this.asignaturaNueva) {
        encontrado = true;
      }
    }
    if (!encontrado) {
      this.datasourceAsignaturas = this.datasourceAsignaturas.concat(this.asignaturaNueva);
    }
  }

  ocultar() {
    this.showAsignaturas = false;
  }

  guardar() {
    //ESTE ES EL DOCENTE YA MODIFICADO PARA USARLO
    this.docenteActual.asignaturas = this.datasourceAsignaturas;
    this.docenteService.guardarDocenteModificado(this.docenteActual).subscribe(
      Response=>{
        console.log(Response);
      });
  }

}
