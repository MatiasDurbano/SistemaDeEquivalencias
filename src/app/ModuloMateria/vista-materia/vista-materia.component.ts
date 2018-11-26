import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Carrera } from 'src/app/model/Carrera';
import { TablaMateriasComponent } from '../tabla-materias/tabla-materias.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MateriaserviceService } from 'src/app/ServiceMateria/materiaservice.service';
import { Instituto } from 'src/app/model/Instituto';
import { Materia } from 'src/app/model/Materia';
import { CarreraMateria } from 'src/app/model/CarreraMateria';
import { RestResponse } from 'src/app/model/RestResponse';


@Component({
  selector: 'app-vista-materia',
  templateUrl: './vista-materia.component.html',
  styleUrls: ['./vista-materia.component.css']
})
export class VistaMateriaComponent implements OnInit {

  @ViewChild(TablaMateriasComponent) tablaMateria: TablaMateriasComponent;
  
  indice: number=0;
  indiceCarrera: number;

  @Input()instituto: Instituto;
  prueba : string;
  plan: string = null;
  carreraMateria:CarreraMateria;

  restResponse: RestResponse;

  formCarrera: FormGroup = new FormGroup({
    carrera: new FormControl('', Validators.required),
    nombreMateria : new FormControl('', Validators.required),
    horas: new FormControl('', [ Validators.required, Validators.pattern('[0-9]*') ]),
    plan: new FormControl(null, Validators.required),
  });
  
  Carreras:Array<Carrera> = new Array<Carrera>();
  constructor(private materiaService: MateriaserviceService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit() {
    this.materiaService.cargar(this.instituto).subscribe(
      Response=>{
        this.restResponse=Response;
        this.Carreras=<Array<Carrera>>this.restResponse.message;
      })
  }
  cargar(event: any){
    this.limpiar();
    this.tablaMateria.vaciar();
    this.indice=0
    for(let Carrera of this.Carreras){
      
      if(Carrera.carrera==event)
        {
         this.indiceCarrera=this.indice
          this.tablaMateria.Cargar(Carrera.materias);
        }
      this.indice=this.indice+1
      }
  }
  add(){
    const materia: Materia = new Materia(
      this.formCarrera.get('nombreMateria').value,
      this.formCarrera.get('horas').value,
      this.formCarrera.get('plan').value
    );
    this.Carreras[this.indiceCarrera].materias.push(materia);
    this.tablaMateria.add(materia);
    this.limpiar();

  }
  guardar(){

    this.carreraMateria=new CarreraMateria(this.instituto,this.Carreras);

    this.materiaService.guardar(this.carreraMateria).subscribe(
      Response=>{
        console.log(Response);
      });
  }
  limpiar (){
    this.formCarrera.get('nombreMateria').setValue('');
    this.formCarrera.get('horas').setValue('');
    this.formCarrera.get('plan').setValue(null);
  }

  leerArchivoPlan(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.obtenerArchivoPlan.bind(this);
      reader.readAsDataURL(file);
    }
  }
  obtenerArchivoPlan(e) {
    this.plan = e.target.result;
  }

}
