import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocenteserviceService {

  constructor(private http: HttpClient) { }

  traerDocentes(instituto): Observable<any>
  {
  return this.http.post('/traerDocentes',instituto);
  }

traerInstitutos(): Observable<any>
{
  return this.http.get('/institutos');
}

}
