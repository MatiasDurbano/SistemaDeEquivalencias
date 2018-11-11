import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  registrar(userData): Observable<any>
{
  return this.http.post('/registroDocente',userData);
}
cargarInstitutos(): Observable<any>
{
  return this.http.get('/institutos');
}
}
