import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Carrera } from 'src/app/model/Carrera';
import { TablaMateriasComponent } from '../tabla-materias/tabla-materias.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MateriaserviceService } from 'src/app/ServiceMateria/materiaservice.service';
import { Instituto } from 'src/app/model/Instituto';


@Component({
  selector: 'app-vista-materia',
  templateUrl: './vista-materia.component.html',
  styleUrls: ['./vista-materia.component.css']
})
export class VistaMateriaComponent implements OnInit {

  @ViewChild(TablaMateriasComponent) tablaMateria: TablaMateriasComponent;
  instituto:Instituto

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
  Carreras:Array<Carrera> = new Array<Carrera>();

  constructor(private materiaService: MateriaserviceService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(){ 
    this.route.params.subscribe(params => {
    this.instituto=new Instituto(params['inst']);
  });
  this.materiaService.cargar(this.instituto).subscribe(
    Response=>{
      this.Carreras=Response;
    })

  }
}
