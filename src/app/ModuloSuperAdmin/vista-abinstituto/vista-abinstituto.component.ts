import { Component, OnInit } from '@angular/core';
import { MockInstituto } from 'src/app/ModuloSolicitud/clases/Mock';
import { Instituto } from 'src/app/model/Instituto';

@Component({
  selector: 'app-vista-abinstituto',
  templateUrl: './vista-abinstituto.component.html',
  styleUrls: ['./vista-abinstituto.component.css']
})
export class VistaABInstitutoComponent implements OnInit {

  mockInstituto: MockInstituto = new MockInstituto();

  /////////////////////////////////////////////////////

  displayedColumns: string[] = ['nombre', 'eliminar'];
  datasourse = new Array<Instituto>();

  estadoInicial = new Array<Instituto>();

  instituto: string;

  constructor() {
    this.datasourse = [this.mockInstituto.instituto1, this.mockInstituto.instituto2, this.mockInstituto.instituto3,
      this.mockInstituto.instituto4];
    this.estadoInicial = this.datasourse.concat();
  }

  ngOnInit() {
  }

  eliminar(instituto: Instituto) {
    const nuevo = new Array<Instituto>();
    for (const item in this.datasourse) {
      if (this.datasourse[item].nombre !== instituto.nombre) {
        nuevo.push(this.datasourse[item]);
      }
    }
    this.datasourse = nuevo;
  }

  agregar() {
    let agregar = true;
    for (const item in this.datasourse) {
      if (this.datasourse[item].nombre === this.instituto) {
        agregar = false;
      }
    }

    if (agregar) {
      this.datasourse = this.datasourse.concat({id: 0, nombre: this.instituto, disponible: 1});
      this.instituto = '';
    }
  }

  aplicarCambios() {
    const agregados = new Array<Instituto>();
    const borrados = new Array<Instituto>();

    for (const itemDatasource of this.datasourse) {
      let encontrado = false;
      for (const itemInicial of this.estadoInicial) {
        if (itemDatasource.nombre === itemInicial.nombre) {
          encontrado = true;
        }
      }
      if (encontrado === false) {
        agregados.push(itemDatasource);
      }
    }

    for (const itemInicial of this.estadoInicial) {
      let encontrado = false;
      for (const itemDatasource of this.datasourse) {
        if (itemInicial.nombre === itemDatasource.nombre) {
          encontrado = true;
        }
      }
      if (encontrado === false) {
        borrados.push({id: itemInicial.id, nombre: itemInicial.nombre, disponible: 0});
      }
    }

    console.log(agregados);
    console.log(borrados);
  }

}
