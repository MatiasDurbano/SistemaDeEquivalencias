import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  solicitarPorMaterias(materias: Array<String>): Observable<any>
  {
    return this.http.post('/getPorMateriasDocente',materias);
  }

}
