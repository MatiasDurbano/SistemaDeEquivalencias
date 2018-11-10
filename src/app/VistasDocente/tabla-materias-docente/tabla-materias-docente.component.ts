import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablaMateriasDocenteDataSource } from './tabla-materias-docente-datasource';

@Component({
  selector: 'app-tabla-materias-docente',
  templateUrl: './tabla-materias-docente.component.html',
  styleUrls: ['./tabla-materias-docente.component.css']
})
export class TablaMateriasDocenteComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TablaMateriasDocenteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'materia','quitar'];

  ngOnInit() {
    this.dataSource = new TablaMateriasDocenteDataSource(this.paginator, this.sort);
  }
  
  quitar(id: number){
    this.dataSource.delete(id);
    this.dataSource = new TablaMateriasDocenteDataSource(this.paginator, this.sort);
  }
  
  addElement(materia: string){
    this.dataSource.add(materia);
    this.dataSource = new TablaMateriasDocenteDataSource(this.paginator, this.sort);
  }
}
