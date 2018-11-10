import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TablaMateriaEquivalenciaDataSource } from './tabla-materia-equivalencia-datasource';

@Component({
  selector: 'app-tabla-materia-equivalencia',
  templateUrl: './tabla-materia-equivalencia.component.html',
  styleUrls: ['./tabla-materia-equivalencia.component.css']
})
export class TablaMateriaEquivalenciaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TablaMateriaEquivalenciaDataSource;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','universidad','materia', 'materiaUNGS','plan','quitar'];

  ngOnInit() {
    this.dataSource = new TablaMateriaEquivalenciaDataSource(this.paginator, this.sort);
  }

   addElement(universidad: string,materiaCurso: string, materiaUNGS: string, plan: string) {
    console.log("curso: "+ materiaCurso +"materia "+materiaUNGS );
    this.dataSource.add(universidad,materiaCurso,materiaUNGS,plan);
    this.dataSource = new TablaMateriaEquivalenciaDataSource(this.paginator, this.sort);
  }

  quitar(id: number){
    this.dataSource.delete(id);
    this.dataSource = new TablaMateriaEquivalenciaDataSource(this.paginator, this.sort);
  }

  


}
