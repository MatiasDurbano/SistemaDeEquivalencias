import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Docente } from '../ModuloSolicitud/clases/Docente';


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

traerMateriasPorInstituto(instituto): Observable<any>
{
  return this.http.post('/materiasPorInstituto',instituto);
}

guardarDocenteModificado(docente): any {
  
  return this.http.post('/actualizarDocente',docente);
}

borrarDocente(docente): any {
  
  return this.http.post('/borrarDocente',docente);
}

}
