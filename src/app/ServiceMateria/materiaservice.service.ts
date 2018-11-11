import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
 @Injectable({
  providedIn: 'root'
})
export class MateriaserviceService {
  constructor(private http: HttpClient) { }
   guardar(userData): Observable<any>
  {
  return this.http.post('/guardarMaterias',userData);
  }
   cargar(userData): Observable<any>
  {
    return this.http.post('/carrerasmaterias',userData);
  }
 }