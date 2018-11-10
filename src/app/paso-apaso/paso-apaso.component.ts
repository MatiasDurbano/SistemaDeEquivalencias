import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { VistaSolicitudEquivalenciaComponent } from '../vista-solicitud-equivalencia/vista-solicitud-equivalencia.component';
import { alumnoModelo } from '../model/Alumno.model';
import {  SolicitudModel } from '../model/Solicitud.model';
import { SolicitudService } from '../ServiceSolicitud/solicitud.service';


@Component({
  selector: 'app-paso-apaso',
  templateUrl: './paso-apaso.component.html',
  styleUrls: ['./paso-apaso.component.css'],
  providers: [SolicitudService]
})
export class PasoApasoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  private alumno: alumnoModelo;
  private solicitud: Array<SolicitudModel>;

  dato;

  @ViewChild(MenuPrincipalComponent) formAlumno: MenuPrincipalComponent;
  @ViewChild(VistaSolicitudEquivalenciaComponent) formSoliciudes: VistaSolicitudEquivalenciaComponent;

  

  constructor(private _formBuilder: FormBuilder,private serviceSolicitud: SolicitudService) {}


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.dato={
      alumno:new alumnoModelo(),
      solicitudes: new Array<SolicitudModel>()
    }

  }

}
