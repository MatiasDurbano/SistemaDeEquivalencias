import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { SolicitudService } from 'src/app/ServiceSolicitud/solicitud.service';
import { Materia } from 'src/app/model/Materia';
import { Carrera } from 'src/app/model/Carrera';
import { TablaMateriasComponent } from '../tabla-materias/tabla-materias.component';



@Component({
  selector: 'app-vista-materia',
  templateUrl: './vista-materia.component.html',
  styleUrls: ['./vista-materia.component.css']
})
export class VistaMateriaComponent implements OnInit {

  @ViewChild(TablaMateriasComponent) tablaMateria: TablaMateriasComponent;
  
  formCarrera: FormGroup = new FormGroup({
    carrera: new FormControl('', Validators.required),
    nombre : new FormControl('', Validators.required),
    horas: new FormControl('', [ Validators.required, Validators.pattern('[0-9]*') ]),
  });
    
  listCarreras: Array<Carrera> =[
    {
      nombre :'aaaaaaa',
      materias: [{horas: 2, nombre:'aaaaaa'},]
    },
    {
      nombre :'bbbbbbb',
      materias: [{horas: 2, nombre:'aaaaaa'},]
    },
    {
      nombre :'ccccccc',
      materias: [{horas: 2, nombre:'aaaaaa'},]
    }
  ]

  constructor(private serviceSolicitud: SolicitudService) { }

  ngOnInit() {
  }

}
