import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  traerAdmin(email): Observable<any>
  {
  return this.http.post('obtenerAdmin',email);
  }

  traerSolicitudes(instituto): Observable<any>
  {
  return this.http.post('solicitudesAdmin',instituto);
  }
}
