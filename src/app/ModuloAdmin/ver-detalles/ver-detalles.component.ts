import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/ModuloSolicitud/clases/Solicitud';
import { AsignaturasUNGS } from 'src/app/ModuloSolicitud/clases/AsignaturasUNGS';
import { AsignaturaEquivalente } from 'src/app/ModuloSolicitud/clases/AsignaturaEquivalente';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Aprobacion } from 'src/app/ModuloDocente/vista-aprobacion/vista-aprobacion.component';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.css']
})
export class VerDetallesComponent implements OnInit {

  solicitud: Solicitud;

  asignaturasUNGS: Array<AsignaturasUNGS>;

  asignaturaSeleccionada: AsignaturasUNGS;

  displayedColumns: string[] = ['nombre', 'institutoOrigen', 'anoAprobacion', 'cargaHoraria', 'descarga'];
  dataSource: Array<AsignaturaEquivalente>;

  formModificacion: FormGroup = new FormGroup({
    estado: new FormControl('', Validators.required),
    comentario: new FormControl('', Validators.required),
  });

  opciones: Aprobacion[] = [
    {value: 'aprobado', viewValue: 'Aprobado'},
    {value: 'desaprobado', viewValue: 'Desaprobado'},
    {value: 'coloquio', viewValue: 'Coloquio'}
  ];

  constructor() { }

  ngOnInit() {
  }

  cargarSolicitud(solicitud: Solicitud) {
    this.solicitud = solicitud;
    this.asignaturasUNGS = this.solicitud.asignaturasUNGS;
    this.asignaturaSeleccionada = this.asignaturasUNGS[0];
    this.dataSource = this.asignaturaSeleccionada.equivalencias;
  }

  cargarTabla() {
    this.dataSource = this.asignaturaSeleccionada.equivalencias;
  }

  downloadFile (e: AsignaturaEquivalente) {
    saveAs(e.documentacion, 'test.pdf');
  }

  modificar() {
    this.asignaturaSeleccionada.estado = this.formModificacion.get('estado').value;
    this.asignaturaSeleccionada.comentario = this.formModificacion.get('comentario').value;
  }

}
