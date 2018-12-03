import { Component, OnInit } from '@angular/core';
import { MockInstituto } from 'src/app/ModuloSolicitud/clases/Mock';
import { Instituto } from 'src/app/model/Instituto';
import { AdminserviceService } from 'src/app/ServiceAdmin/adminservice.service';
import { RestResponse } from 'src/app/model/RestResponse';
import { InstitutoPost } from 'src/app/model/InstitutoPost';

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
  restResponse:RestResponse = new RestResponse();
  constructor(private serviceAdmin: AdminserviceService) {
  }

  ngOnInit() {
    this.obtenerInstituto().then(resultado=>{
      this.datasourse =<Array<Instituto>> resultado;
      this.estadoInicial = this.datasourse.concat();
      
    })
  }
  obtenerInstituto(){
    return new Promise((resultado) => {
      this.serviceAdmin.traerTodosInstitutos().subscribe(
        Response=>{
          this.restResponse=Response
          resultado(this.restResponse.message);
                });
      });
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
    console.log(agregados)
    const institutos: InstitutoPost= new InstitutoPost();
    institutos.institutos=agregados;
    this.serviceAdmin.agregarInstituto(institutos).subscribe(
      Response=>{
        console.log(Response);
      });
      
    institutos.institutos=borrados;
    console.log(borrados);
    this.serviceAdmin.borrarInstituto(institutos).subscribe(
      Response=>{
        console.log(Response);
      });
  }

}
