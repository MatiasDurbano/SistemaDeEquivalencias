import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablaSeguimientoDataSource } from './tabla-seguimiento-datasource';

@Component({
  selector: 'app-tabla-seguimiento',
  templateUrl: './tabla-seguimiento.component.html',
  styleUrls: ['./tabla-seguimiento.component.css']
})
export class TablaSeguimientoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TablaSeguimientoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre','apellido','materia', 'estado','profesor','boton'];

  ngOnInit() {
    this.dataSource = new TablaSeguimientoDataSource(this.paginator, this.sort);
  }
}
