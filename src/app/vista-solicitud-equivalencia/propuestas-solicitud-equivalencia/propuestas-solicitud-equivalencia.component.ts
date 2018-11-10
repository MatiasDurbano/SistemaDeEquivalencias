import { Component, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {SolicitudOfrecimiento} from 'src/app/model/SolicitudOfrecimiento.model';


export class ExampleDataSource extends DataSource<TablaAsignaturaPropuesta> {
  data = new BehaviorSubject<TablaAsignaturaPropuesta[]>(ELEMENT_DATA);

  connect(): Observable<TablaAsignaturaPropuesta[]> {
    return this.data;
  }

  disconnect() {}
}

export interface TablaAsignaturaPropuesta {
  institutOrigen: string;
  anoAprobacion: number;
  asignaturaPropuesta: string;
}

const ELEMENT_DATA: Array<TablaAsignaturaPropuesta> = new Array<TablaAsignaturaPropuesta>();

@Component({
  selector: 'app-propuestas-solicitud-equivalencia',
  templateUrl: './propuestas-solicitud-equivalencia.component.html',
  styleUrls: ['./propuestas-solicitud-equivalencia.component.css']
})
export class PropuestasSolicitudEquivalenciaComponent implements OnInit {

  displayedColumns: string[] = ['institutOrigen', 'anoAprobacion', 'asignaturaPropuesta'];
  dataSource = new ExampleDataSource();
  solicitudes= new SolicitudOfrecimiento;



  constructor() {
  }

  ngOnInit() {
  }

  generarString(): Array<string> {
    const ret: Array<string> = new Array<string>();
    for (const item  of ELEMENT_DATA) {
       ret.push(`Asignatura propuesta : ${item.asignaturaPropuesta} -
        Instituto origen: ${item.institutOrigen} -
        Año de aprobacion: ${item.anoAprobacion}`);
    }
    return ret;
  }

  generarSolicitudOfrecimiento(): Array<SolicitudOfrecimiento> {
    const ret: Array<SolicitudOfrecimiento> = new Array<SolicitudOfrecimiento>();
    for (const item  of ELEMENT_DATA) {
      const solicitudOfrecimiento= new SolicitudOfrecimiento();
       solicitudOfrecimiento.set(item.institutOrigen,item.anoAprobacion,item.asignaturaPropuesta);
       ret.push(solicitudOfrecimiento);
    }
    return ret;
  }

  add(institutOrigen: string, anoAprobacion: number, asignaturaPropuesta: string) {
    ELEMENT_DATA.push({institutOrigen: institutOrigen, anoAprobacion: anoAprobacion, asignaturaPropuesta: asignaturaPropuesta});
    this.dataSource = new ExampleDataSource();
  }

  remove() {
    ELEMENT_DATA.pop();
    this.dataSource = new ExampleDataSource();
  }

  vaciar() {
    ELEMENT_DATA.splice(0, ELEMENT_DATA.length);
    this.dataSource = new ExampleDataSource();
  }
}
