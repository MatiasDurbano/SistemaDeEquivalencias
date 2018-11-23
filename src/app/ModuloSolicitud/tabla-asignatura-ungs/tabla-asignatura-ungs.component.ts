import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { AsignaturasUNGS } from '../clases/AsignaturasUNGS';

@Component({
  selector: 'app-tabla-asignatura-ungs',
  templateUrl: './tabla-asignatura-ungs.component.html',
  styleUrls: ['./tabla-asignatura-ungs.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TablaAsignaturaUNGSComponent implements OnInit {

  dataSource = new DataSourceTablaAsignaturaUNGS();
  columnsToDisplay = ['nombre'];
  expandedElement: AsignaturasUNGS;

  constructor() { }

  ngOnInit() {
  }

  add(nuevo: AsignaturasUNGS) {
    ELEMENT_DATA.push(nuevo);
    this.dataSource = new DataSourceTablaAsignaturaUNGS();
    console.log(ELEMENT_DATA);
  }

  remove() {
    ELEMENT_DATA.pop();
    this.dataSource = new DataSourceTablaAsignaturaUNGS();
  }

  generarArregloAsignaturaUNGS(): Array<AsignaturasUNGS> {
    const ret = ELEMENT_DATA;
    return ret;
  }

  estaVacio(): boolean {
    if (ELEMENT_DATA.length === 0) {
      return true;
    } else {
      return false;
    }
  }

}

const ELEMENT_DATA: Array<AsignaturasUNGS> = new Array<AsignaturasUNGS>();

export class DataSourceTablaAsignaturaUNGS extends DataSource<AsignaturasUNGS> {
  data = new BehaviorSubject<AsignaturasUNGS[]>(ELEMENT_DATA);

  connect(): Observable<AsignaturasUNGS[]> {
    return this.data;
  }

  disconnect() {}
}
