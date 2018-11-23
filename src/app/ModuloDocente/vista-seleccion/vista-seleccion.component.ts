import { Component, OnInit, ViewChild } from '@angular/core';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { Alumno } from 'src/app/ModuloSolicitud/clases/Alumno';
import { AsignaturaEquivalente } from 'src/app/ModuloSolicitud/clases/AsignaturaEquivalente';
import { AsignaturasUNGS } from 'src/app/ModuloSolicitud/clases/AsignaturasUNGS';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';
import { VistaAprobacionComponent } from '../vista-aprobacion/vista-aprobacion.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaMateria } from 'src/app/model/ListaMateria';
import { Email } from 'src/app/model/Email';

@Component({
  selector: 'app-vista-seleccion',
  templateUrl: './vista-seleccion.component.html',
  styleUrls: ['./vista-seleccion.component.css']
})
export class VistaSeleccionComponent implements OnInit {


  Listamaterias: Array<String> = ["materia1","materia2"];
  maxi: Alumno = new Alumno (
    'Andrea',
    'Pompilio',
    39071820,
    '39071820/2014',
    1150290821,
    'maxi.pompilio@gmail.com',
    'Licenciatura en Sistema',
    null,
    null
  );
  sor: AsignaturaEquivalente = new AsignaturaEquivalente(
    'Sistemas Operativos',
    'UTN',
    2005,
    128,
    null
  );
  redes: AsignaturaEquivalente = new AsignaturaEquivalente(
    'Redes de la Informacion',
    'UTN',
    2005,
    128,
    null
  );
  sistemaOperativosII: AsignaturasUNGS = new AsignaturasUNGS(
    'Sistemas Operativos II',
    [this.sor, this.redes]
  );

  @ViewChild(VistaAprobacionComponent) vistaAprobacion: VistaAprobacionComponent;
  
  materias: Array<AsignaturasUNGS> = new Array<AsignaturasUNGS>();
  solicitud: Solicitud;

  solicitudes: Array<Solicitud>;
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'carrera'];
  selected = 0;

  listaMateriasDocente: Array<String> = ['materia1', 'materia2'];
  listaMaterias: ListaMateria = new ListaMateria();
  solicitudesFiltradas = new Array<Solicitud>();

  email:Email;
  
  constructor(private serviceSolicitud: SolicitudService, private router: Router,private route: ActivatedRoute) {
    
      
  }

  showtable = false;
  showcargando = true;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.email=new Email(params['Email']);
    });
   
   this.buscarMateriasDocente().then(result=>{
          this.buscarSolicitudes(<ListaMateria>result).then(resultado=>{
            this.showtable = <boolean>resultado;
            this.showcargando = !<boolean>resultado;
          });
    });
        
  }

  buscarSolicitudes(result: ListaMateria){
    return new Promise((resultado) =>{
    this.serviceSolicitud.solicitarPorMaterias(result).subscribe(
        Response => {  
          this.solicitudesFiltradas = Response;
          console.log(this.solicitudesFiltradas);
          resultado(true);    
      });
      
    });
    
    
  }

  buscarMateriasDocente(){
  return new Promise((resultado) =>{
    this.serviceSolicitud.solicitarMateriasDocente(this.email).subscribe(
      Response =>{
        console.log("TRAIGO TODAS LAS MATERIAS DEL DOCENTE");
        console.log(Response)
        this.listaMaterias=Response;
        resultado(this.listaMaterias);
      });
   });  
  }


  filtrarSolicitudes(solicitudes: Array<Solicitud>, docente: string) {
    for (const solicitud of solicitudes) {
      for (const asignatura of solicitud.asignaturasUNGS) {
        console.log(asignatura);
        if (asignatura.materiaUngs === docente && asignatura.estado === '') {
          this.solicitudesFiltradas.push(solicitud);

        }
      }
    }
  }

  cargar(e: Solicitud) {

    console.log(e);
    this.vistaAprobacion.cargarSolicitud(e);
    this.selected = 1;
  }

}
