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
  
  displayedColumns: string[] = ['nombre', 'horas'];
  dataSource = new DataSourceTablaMaterias();

  constructor() { }

  ngOnInit() {
  }

  Cargar(lista: Array<Materia>) {
    if(lista!=null){
    for (let Materia of lista) {
      ELEMENT_DATA.push(Materia); 
    }
    this.dataSource = new DataSourceTablaMaterias();
    }
  }

  vaciar(){
    while(ELEMENT_DATA.length!=0){
    ELEMENT_DATA.pop();
    this.dataSource = new DataSourceTablaMaterias();
    }
  }

  add(materia: Materia){
    ELEMENT_DATA.push(materia);
    this.dataSource = new DataSourceTablaMaterias();
  }
  
}
export class DataSourceTablaMaterias extends DataSource<Materia> {
  data = new BehaviorSubject<Materia[]>(ELEMENT_DATA);

  connect(): Observable<Materia[]> {
    return this.data;
  }

  disconnect() {}
}