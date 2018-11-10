import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablaDocenteDataSource } from './tabla-docente-datasource';

@Component({
  selector: 'app-tabla-docente',
  templateUrl: './tabla-docente.component.html',
  styleUrls: ['./tabla-docente.component.css']
})
export class TablaDocenteComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TablaDocenteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['folio', 'nombre','apellido','universidad','boton'];

  ngOnInit() {
    this.dataSource = new TablaDocenteDataSource(this.paginator, this.sort);
  }
}
