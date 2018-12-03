import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  
  
  agregarInstituto(agregados): Observable<any>
  {
  return this.http.post('agregarInstituto',agregados);
  }
 


  constructor(private http: HttpClient) { }

  borrarInstituto(borrados): Observable<any>
  {
  return this.http.post('borrarInstituto',borrados);
  }

  obtenerInstituto(): Observable<any>
  {
  return this.http.get('institutos');
  }
  
  traerAdmin(email): Observable<any>
  {
  return this.http.post('obtenerAdmin',email);
  }

  traerSolicitudes(instituto): Observable<any>
  {
  return this.http.post('solicitudesAdmin',instituto);
  }

  traerTodos(): Observable<any>
  {
  return this.http.get('obtenerTodosLosAdmin');
  }

  borrar(Administrador): Observable<any>
  {
  return this.http.post('borrarAdmin',Administrador);
  }

  agregar(Administrador): Observable<any>
  {
  return this.http.post('guardarSuperAdmin',Administrador);
  }

  traerTodasSolicitudes(): Observable<any>
  {
  return this.http.get('traerTodasSolicitudes');
  }

  traerTodosInstitutos(): Observable<any>
  {
  return this.http.get('traerTodosInstitutos');
  }

  borrarDocente(docente): any {
  
    return this.http.post('/borrarDocente',docente);
  }


}
