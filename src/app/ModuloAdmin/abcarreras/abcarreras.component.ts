import { Component, OnInit, Input } from '@angular/core';
import { Instituto } from 'src/app/model/Instituto';
import { CarreraUNGS } from '../model/CarreraUNGS';
import { MockCarrera } from 'src/app/ModuloSolicitud/clases/Mock';
import { CarreraPost } from '../model/CarreraPost';
import { CarreraService } from 'src/app/ServiceCarrera/carrera.service';
import { RestResponse } from 'src/app/model/RestResponse';

@Component({
  selector: 'app-abcarreras',
  templateUrl: './abcarreras.component.html',
  styleUrls: ['./abcarreras.component.css']
})
export class ABCarrerasComponent implements OnInit {

  mockCarrera: MockCarrera = new MockCarrera();

  /////////////////////////////////////////////////////

  @Input()instituto: Instituto;

  displayedColumns: string[] = ['nombre', 'eliminar'];
  datasourse = new Array<CarreraUNGS>();

  estadoInicial = new Array<CarreraUNGS>();

  carrera: string;

  restResponse: RestResponse= new RestResponse();
  constructor(private carreraService :CarreraService) {
    
  }

  ngOnInit() {

  
    this.obtenerCarreras().then(resultado=>{
      this.datasourse = <Array<CarreraUNGS>> resultado;
      this.estadoInicial=this.datasourse;
    })

    
  
  }

  obtenerCarreras(){
    return new Promise((resultado) => {
      this.carreraService.buscarCarreraPorInstituto(this.instituto).subscribe(
        Response=>{
          this.restResponse=Response
          resultado(this.restResponse.message);
                });
      });
  }

  eliminar(carrera: CarreraUNGS) {
    const nuevo = new Array<CarreraUNGS>();
    for (const item in this.datasourse) {
      if (this.datasourse[item].nombre !== carrera.nombre) {
        nuevo.push(this.datasourse[item]);
      }
    }
    this.datasourse = nuevo;
  }

  agregar() {
    let agregar = true;
    for (const item in this.datasourse) {
      if (this.datasourse[item].nombre === this.carrera) {
        agregar = false;
      }
    }

    if (agregar) {
      this.datasourse = this.datasourse.concat({id: 0, nombre: this.carrera, disponible: 1});
      this.carrera = '';
    }
  }

  aplicarCambios() {
    const agregados = new Array<CarreraUNGS>();
    const borrados = new Array<CarreraUNGS>();

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
    const carreras:CarreraPost=new CarreraPost();
    carreras.carreras=agregados;
    carreras.instituto=this.instituto;
    console.log(carreras);
    this.carreraService.guardarCarrera(carreras).subscribe(Response=>{
      console.log(Response);
    });

    carreras.carreras=borrados;
    this.carreraService.borrarCarrera(carreras).subscribe(Response=>{
      console.log(Response);
    });
    
    console.log(borrados);
  }

}
