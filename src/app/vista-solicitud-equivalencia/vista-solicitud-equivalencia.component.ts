import { Component, OnInit, ViewChild } from '@angular/core';
import { PropuestasSolicitudEquivalenciaComponent } from './propuestas-solicitud-equivalencia/propuestas-solicitud-equivalencia.component';
import { TablaSolicitudEquivalenciaComponent } from './tabla-solicitud-equivalencia/tabla-solicitud-equivalencia.component';
import { SolicitudModel } from '../model/Solicitud.model';

@Component({
  selector: 'app-vista-solicitud-equivalencia',
  templateUrl: './vista-solicitud-equivalencia.component.html',
  styleUrls: ['./vista-solicitud-equivalencia.component.css']
})
export class VistaSolicitudEquivalenciaComponent implements OnInit {

  asignaturaUNGS: string;
  institutOrigen: string;
  anoAprobacion: number;
  asignaturaPropuesta: string;
  solicitudes: Array<SolicitudModel>;

  @ViewChild(PropuestasSolicitudEquivalenciaComponent) tablaPropuesta: PropuestasSolicitudEquivalenciaComponent;
  @ViewChild(TablaSolicitudEquivalenciaComponent) tablaSolicitud: TablaSolicitudEquivalenciaComponent;

  constructor() {
  }
  
  ngOnInit() {
    this.solicitudes = new Array<SolicitudModel>();
  }
  
  anadir() {
    this.tablaPropuesta.add(this.getInstitutOrigen(), this.getAnoAprobacion(), this.getAsignaturaPropuesta());
    this.institutOrigen = '';
    this.anoAprobacion = null;
    this.asignaturaPropuesta  = '';
  }

  borrar() {
    this.tablaPropuesta.remove();
  }

  agregarSolicitud() {
    const solicitud= new SolicitudModel(this.tablaPropuesta.generarSolicitudOfrecimiento(),this.asignaturaUNGS);
    this.solicitudes.push(solicitud)

    this.tablaSolicitud.add(this.asignaturaUNGS, this.tablaPropuesta.generarString());
    this.tablaPropuesta.vaciar();
    this.asignaturaUNGS = '';
  }

  borrarSolicitud() {
    this.tablaSolicitud.remove();
    this.solicitudes.pop;
  }

  getAsignaturaUNGS(): string {
    return this.asignaturaUNGS;
  }

  getInstitutOrigen(): string {
    return this.institutOrigen;
  }

  getAnoAprobacion(): number {
    return this.anoAprobacion;
  }

  getAsignaturaPropuesta(): string {
    return this.asignaturaPropuesta;
  }

  getSolicitudes(): Array<SolicitudModel>{
    return this.solicitudes;
  }

}
