import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { Alumno } from 'src/app/ModuloSolicitud/clases/Alumno';
import { AsignaturaEquivalente } from 'src/app/ModuloSolicitud/clases/AsignaturaEquivalente';
import { AsignaturaUNGS } from 'src/app/ModuloSolicitud/clases/AsignaturaUNGS';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';
import { Router } from '@angular/router';
import { ListaMateria } from 'src/app/model/ListaMateria';

@Component({
  selector: 'app-vista-seleccion',
  templateUrl: './vista-seleccion.component.html',
  styleUrls: ['./vista-seleccion.component.css']
})
export class VistaSeleccionComponent implements OnInit {


  
  maxi: Alumno = new Alumno (
    'Maximiliano',
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
  sistemaOperativosII: AsignaturaUNGS = new AsignaturaUNGS(
    'Sistemas Operativos II',
    [this.sor, this.redes]
  );

  materias: Array<AsignaturaUNGS> = new Array<AsignaturaUNGS>();
  solicitud: Solicitud;

  solicitudes: Array<Solicitud>;
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'carrera'];

  solicitudesFiltradas: Array<Solicitud>;

  listaMateriasDocente :Array<String>=["materia1","materia2"];
  listaMaterias:ListaMateria=new ListaMateria();
  
 
  constructor(private serviceSolicitud: SolicitudService, private router: Router) {
    this.solicitudes = new Array<Solicitud>();
    this.materias.push(this.sistemaOperativosII);
    this.solicitud = new Solicitud (this.maxi, this.materias);
    this.solicitudes.push(this.solicitud);
    this.solicitudesFiltradas = new Array<Solicitud>();
    this.filtrarSolicitudes(this.solicitudes, 'Sistemas Operativos II');

    
    this.listaMaterias.set(this.listaMateriasDocente);
    
    this.serviceSolicitud.solicitarPorMaterias(this.listaMaterias).subscribe(
      Response => {
        this.solicitudesFiltradas = Response;
        console.log("FILTRADO");
    
        console.log(this.solicitudesFiltradas);
    });
    
    
   


  }

  ngOnInit() {
  }

  filtrarSolicitudes(solicitudes: Array<Solicitud>, docente: string) {
    for (const solicitud of solicitudes) {
      for (const asignatura of solicitud.asignaturasUNGS) {
        console.log(asignatura);
        if (asignatura.nombre === docente && asignatura.estado === '') {
          this.solicitudesFiltradas.push(solicitud);
        }
      }
    }
  }

  saludo(e: Solicitud) {
    this.router.navigate(['vistaAprobacion', e]);
  }

}
