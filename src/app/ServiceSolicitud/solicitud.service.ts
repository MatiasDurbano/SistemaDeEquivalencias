import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ListaMateria } from '../model/ListaMateria';
import { CodigoAlumno } from '../ModuloConsulta/Clases/CodigoAlumno';
import { Email } from '../model/Email';
import { Solicitud } from '../ModuloSolicitud/clases/Solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  

  constructor(private http: HttpClient) { }

  registrarSolicitud(solicitud): Observable<any>
  {
    return this.http.post('/solicitud',solicitud);
  }

  solicitarCarreras(): Observable<any>
  {
    return this.http.get('/carrera');
  }

  solicitarPorMaterias(lista: ListaMateria): Observable<any>
  {
    return this.http.post('/getPorMateriasDocente',lista);
  }

  consultarPorCodigo(codigo: CodigoAlumno): any {
    return this.http.post('/getSolicitud',codigo); 
  }

  solicitarMateriasDocente(email: Email): Observable<any>
  {
    return this.http.post('/materiasDocente',email);
  }

  actualizarSolicitud(solicitud:Solicitud): Observable<any>
  {
    return this.http.post('/actualizarSolcitud',solicitud);
  }

}
