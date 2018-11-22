import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ListaMateria } from '../model/ListaMateria';
import { CodigoAlumno } from '../ModuloConsulta/Clases/CodigoAlumno';

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

  solicitarMaterias(instituto: String): Observable<any>
  {
    return this.http.post('/carrera',instituto);
  }

  solicitarPorMaterias(lista: ListaMateria): Observable<any>
  {
    return this.http.post('/getPorMateriasDocente',lista);
  }

  consultarPorCodigo(codigo: CodigoAlumno): any {
    return this.http.post('/getSolicitud',codigo);
    
  }

}
