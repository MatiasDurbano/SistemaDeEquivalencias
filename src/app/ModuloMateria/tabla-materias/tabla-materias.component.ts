import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { Materia } from 'src/app/model/Materia';

const ELEMENT_DATA: Array<Materia> = new Array<Materia>();

@Component({
  selector: 'app-tabla-materias',
  templateUrl: './tabla-materias.component.html',
  styleUrls: ['./tabla-materias.component.css']
})
export class TablaMateriasComponent implements OnInit {
  
  displayedColumns: string[] = ['Materias', 'Horas'];
  dataSource = new DataSourceTablaMaterias();

  constructor() { }

  ngOnInit() {
  }

}
export class DataSourceTablaMaterias extends DataSource<Materia> {
  data = new BehaviorSubject<Materia[]>(ELEMENT_DATA);

  connect(): Observable<Materia[]> {
    return this.data;
  }

  disconnect() {}
}