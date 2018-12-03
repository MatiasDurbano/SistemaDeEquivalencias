import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http: HttpClient) { }


  buscarCarreraPorInstituto(instituto): Observable<any>
  {
  return this.http.post('carreraPorInstituto',instituto);
  }

  guardarCarrera(guardado): Observable<any>
  {
  return this.http.post('guardarCarrera',guardado);
  }

  borrarCarrera(guardado): Observable<any>
  {
  return this.http.post('borrarCarrera',guardado);
  }

}
