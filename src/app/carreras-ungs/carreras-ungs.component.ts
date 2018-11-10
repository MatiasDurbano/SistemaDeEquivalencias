import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Carrera {
  value: string;
  viewValue: string;
}

export interface CarreraGroup {
  disabled?: boolean;
  name: string;
  carrera: Carrera[];
}

@Component({
  selector: 'app-carreras-ungs',
  templateUrl: './carreras-ungs.component.html',
  styleUrls: ['./carreras-ungs.component.css']
})
export class CarrerasUNGSComponent implements OnInit {

  carreraControl = new FormControl();
  carreraGroups: CarreraGroup[] = [
    {
      name: 'Tecnicaturas',
      carrera: [
        {value: 'Tecnicatura Superior en Informática-0', viewValue: 'Tecnicatura Superior en Informática'},
        {value: 'Tecnicatura Superior en Química-1', viewValue: 'Tecnicatura Superior en Química'},
        {value: 'Tecnicatura Superior en Automatización y Control-2', viewValue: 'Tecnicatura Superior en Automatización y Control'},
        {value: 'Tecnicatura Superior en Sistemas de Información Geográfica-0',
        viewValue: 'Tecnicatura Superior en Sistemas de Información Geográfica'}
      ]
    },
    {
      name: 'Ingienerías',
      carrera: [
        {value: 'lngeniería Industrial-3', viewValue: 'lngeniería Industrial'},
        {value: 'Ingeniería Electromecánica Orientación Automatización-4',
        viewValue: 'Ingeniería Electromecánica Orientación Automatización'},
        {value: 'lngeniería Química-5', viewValue: 'lngeniería Química'}
      ]
    },
    {
      name: 'Licenciaturas',
      carrera: [
        {value: 'Licenciatura en Sistemas-6', viewValue: 'Licenciatura en Sistemas'},
        {value: 'Licenciatura en Economía Política-7', viewValue: 'Licenciatura en Economía Política'},
        {value: 'Licenciatura en Economía Industrial-8', viewValue: 'Licenciatura en Economía Industrial'},
        {value: 'Licenciatura en Administración de Empresas-6', viewValue: 'Licenciatura en Administración de Empresas'},
        {value: 'Licenciatura en Urbanismo-7', viewValue: 'Licenciatura en Urbanismo'},
        {value: 'Licenciatura en Política Social-8', viewValue: 'Licenciatura en Política Social'},
        {value: 'Licenciatura en Ecología-7', viewValue: 'Licenciatura en Ecología'},
        {value: 'Licenciatura en Administración Pública-8', viewValue: 'Licenciatura en Administración Pública'},
        {value: 'Licenciatura en Estudios Políticos-7', viewValue: 'Licenciatura en Estudios Políticos'},
        {value: 'Licenciatura en Educación-8', viewValue: 'Licenciatura en Educación'},
        {value: 'Licenciatura en Cultura y Lenguajes Artísticos-7', viewValue: 'Licenciatura en Cultura y Lenguajes Artísticos'},
        {value: 'Licenciatura en Comunicación-8', viewValue: 'Licenciatura en Comunicación'}
      ]
    },
    {
      name: 'Profesorados',
      carrera: [
        {value: 'Profesorado Universitario de Educación Superior en Geografía-9',
        viewValue: 'Profesorado Universitario de Educación Superior en Geografía'},
        {value: 'Profesorado Universitario de Educación Superior en Lengua y Literatura-10',
        viewValue: 'Profesorado Universitario de Educación Superior en Lengua y Literatura'},
        {value: 'Profesorado Universitario de Educación Superior en Historia-9',
        viewValue: 'Profesorado Universitario de Educación Superior en Historia'},
        {value: 'Profesorado Universitario de Educación Superior en Física-10',
        viewValue: 'Profesorado Universitario de Educación Superior en Física'},
        {value: 'Profesorado Universitario de Educación Superior en Filosofía-9',
        viewValue: 'Profesorado Universitario de Educación Superior en Filosofía'},
        {value: 'Profesorado Universitario de Educación Superior en Matemática-10',
        viewValue: 'Profesorado Universitario de Educación Superior en Matemática'},
        {value: 'Profesorado Universitario de Educación Superior en Economía-9',
        viewValue: 'Profesorado Universitario de Educación Superior en Economía'}
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
