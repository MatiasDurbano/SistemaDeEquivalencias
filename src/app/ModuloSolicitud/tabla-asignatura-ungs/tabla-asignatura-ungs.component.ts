import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { AsignaturaUNGS } from '../clases/AsignaturaUNGS';

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
  expandedElement: AsignaturaUNGS;

  constructor() { }

  ngOnInit() {
  }

  add(nuevo: AsignaturaUNGS) {
    ELEMENT_DATA.push(nuevo);
    this.dataSource = new DataSourceTablaAsignaturaUNGS();
  }

  remove() {
    ELEMENT_DATA.pop();
    this.dataSource = new DataSourceTablaAsignaturaUNGS();
  }

  generarArregloAsignaturaUNGS(): Array<AsignaturaUNGS> {
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

const ELEMENT_DATA: Array<AsignaturaUNGS> = new Array<AsignaturaUNGS>();

export class DataSourceTablaAsignaturaUNGS extends DataSource<AsignaturaUNGS> {
  data = new BehaviorSubject<AsignaturaUNGS[]>(ELEMENT_DATA);

  connect(): Observable<AsignaturaUNGS[]> {
    return this.data;
  }

  disconnect() {}
}
