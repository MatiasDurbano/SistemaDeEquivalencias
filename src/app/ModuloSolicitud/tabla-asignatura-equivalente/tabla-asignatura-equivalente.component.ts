import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { AsignaturaEquivalente } from '../clases/AsignaturaEquivalente';

const ELEMENT_DATA: Array<AsignaturaEquivalente> = new Array<AsignaturaEquivalente>();

@Component({
  selector: 'app-tabla-asignatura-equivalente',
  templateUrl: './tabla-asignatura-equivalente.component.html',
  styleUrls: ['./tabla-asignatura-equivalente.component.css']
})
export class TablaAsignaturaEquivalenteComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'institutoOrigen', 'anoAprobacion', 'cargaHoraria'];
  dataSource = new DataSourceTablaAsignaturaEquivalente();

  constructor() { }

  ngOnInit() {
  }

  add(nuevo: AsignaturaEquivalente) {
    ELEMENT_DATA.push(nuevo);
    this.dataSource = new DataSourceTablaAsignaturaEquivalente();
  }

  remove() {
    ELEMENT_DATA.pop();
    this.dataSource = new DataSourceTablaAsignaturaEquivalente();
  }

  estaVacio(): boolean {
    if (ELEMENT_DATA.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  generarArregloAsignaturaEquivalente(): Array<AsignaturaEquivalente> {
    const ret = ELEMENT_DATA;
    return ret;
  }

}

export class DataSourceTablaAsignaturaEquivalente extends DataSource<AsignaturaEquivalente> {
  data = new BehaviorSubject<AsignaturaEquivalente[]>(ELEMENT_DATA);

  connect(): Observable<AsignaturaEquivalente[]> {
    return this.data;
  }

  disconnect() {}
}
