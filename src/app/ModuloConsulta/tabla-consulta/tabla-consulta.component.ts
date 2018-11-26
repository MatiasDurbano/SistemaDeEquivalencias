import { Component, OnInit } from '@angular/core';
import { AsignaturasUNGS } from 'src/app/ModuloSolicitud/clases/AsignaturasUNGS';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { saveAs } from 'file-saver';
import { AsignaturaEquivalente } from 'src/app/ModuloSolicitud/clases/AsignaturaEquivalente';

const ELEMENT_DATA: Array<AsignaturasUNGS> = new Array<AsignaturasUNGS>();

@Component({
  selector: 'app-tabla-consulta',
  templateUrl: './tabla-consulta.component.html',
  styleUrls: ['./tabla-consulta.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class TablaConsultaComponent implements OnInit {

  dataSource = new DataSourceTablaConsulta();
  columnsToDisplay = ['nombre'];
  expandedElement: AsignaturasUNGS;
  
  constructor() { }

  ngOnInit() {

  }
  
  cargar(asignatura:AsignaturasUNGS){
    ELEMENT_DATA.push(asignatura);

    this.dataSource = new DataSourceTablaConsulta(); 
  }

}

export class DataSourceTablaConsulta extends DataSource<AsignaturasUNGS> {
  data = new BehaviorSubject<AsignaturasUNGS[]>(ELEMENT_DATA);

  connect(): Observable<AsignaturasUNGS[]> {
    return this.data;
  }

  disconnect() {}
}
