import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-tabla-solicitud-equivalencia',
  templateUrl: './tabla-solicitud-equivalencia.component.html',
  styleUrls: ['./tabla-solicitud-equivalencia.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TablaSolicitudEquivalenciaComponent implements OnInit {
  dataSource = new ExampleDataSource();
  columnsToDisplay = ['asignaturaSolicitada'];
  expandedElement: TablaSolicitudPendiente;

  constructor() {
  }

  ngOnInit() {
  }

  add(asignaturaSolicitada: string, description: Array<string>) {
    ELEMENT_DATA.push({
      asignaturaSolicitada: asignaturaSolicitada,
      description: description
    });
    this.dataSource = new ExampleDataSource();
  }

  remove() {
    ELEMENT_DATA.pop();
    this.dataSource = new ExampleDataSource();
  }

}

export interface TablaSolicitudPendiente {
  asignaturaSolicitada: string;
  description: Array<string>;
}

const ELEMENT_DATA: Array<TablaSolicitudPendiente> = new Array<TablaSolicitudPendiente>();

export class ExampleDataSource extends DataSource<TablaSolicitudPendiente> {
  data = new BehaviorSubject<TablaSolicitudPendiente[]>(ELEMENT_DATA);

  connect(): Observable<TablaSolicitudPendiente[]> {
    return this.data;
  }

  

  disconnect() {}
}
