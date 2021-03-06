import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormlogindocenteComponent } from './VistasDocente/LoginDocente/formlogindocente/formlogindocente.component';
import { RegistrodocenteheadComponent } from './VistasDocente/RegistroDocente/registrodocentehead/registrodocentehead.component';
import { FormRegistroDocenteComponent } from './VistasDocente/RegistroDocente/form-registro-docente/form-registro-docente.component';
import { RegistrodocentefooterComponent } from './VistasDocente/RegistroDocente/registrodocentefooter/registrodocentefooter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarDocenteComponent } from './VistasDocente/menu-bar-docente/menu-bar-docente.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatStepperModule, MatInputModule, MatTabsModule } from '@angular/material';
import { TablaDocenteComponent } from './VistasDocente/tabla-docente/tabla-docente.component';
import { SesionDocenteComponent } from './VistasDocente/sesion-docente/sesion-docente.component';
import { FormMateriaEquivalenciaComponent } from './VistasAlumno/SolicitudEquivalencia/form-materia-equivalencia/form-materia-equivalencia.component';
import { TablaMateriaEquivalenciaComponent } from './VistasAlumno/SolicitudEquivalencia/tabla-materia-equivalencia/tabla-materia-equivalencia.component';
import { TablaSeguimientoComponent } from './VistasAlumno/SeguimientoSolicitud/tabla-seguimiento/tabla-seguimiento.component';
import { FormMateriaDocenteComponent } from './VistasDocente/form-materia-docente/form-materia-docente.component';
import { TablaMateriasDocenteComponent } from './VistasDocente/tabla-materias-docente/tabla-materias-docente.component';
import {MaterialModule} from './materialConfig';
import { LoginComponent } from './login/login.component';
import { SignInDocenteComponent } from './sign-in-docente/sign-in-docente.component';
import { FormularioAlumnoComponent } from './ModuloSolicitud/formulario-alumno/formulario-alumno.component';
import { FormularioEquivalenciaComponent } from './ModuloSolicitud/formulario-equivalencia/formulario-equivalencia.component';
import { TablaAsignaturaEquivalenteComponent } from './ModuloSolicitud/tabla-asignatura-equivalente/tabla-asignatura-equivalente.component';
import { TablaAsignaturaUNGSComponent } from './ModuloSolicitud/tabla-asignatura-ungs/tabla-asignatura-ungs.component';
import { PasoAPasoSolicitudComponent } from './ModuloSolicitud/paso-apaso-solicitud/paso-apaso-solicitud.component';
import { VistaMateriaComponent } from './ModuloMateria/vista-materia/vista-materia.component';
import { TablaMateriasComponent } from './ModuloMateria/tabla-materias/tabla-materias.component';
import { VistaAprobacionComponent } from './ModuloDocente/vista-aprobacion/vista-aprobacion.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { VistaSeleccionComponent } from './ModuloDocente/vista-seleccion/vista-seleccion.component';
import { ToolbarComponent } from './moduloVentanaPrincipal/toolbar/toolbar.component';
import { FormCodigoComponent } from './ModuloConsulta/form-codigo/form-codigo.component';
import { TablaConsultaComponent } from './ModuloConsulta/tabla-consulta/tabla-consulta.component';
import { DatosAlumnoComponent } from './ModuloConsulta/datos-alumno/datos-alumno.component';
import { CuerpoComponent } from './moduloVentanaPrincipal/cuerpo/cuerpo.component';
import { VistaAsignacionAsignaturasComponent } from './ModuloAsignacionAsignaturas/vista-asignacion-asignaturas/vista-asignacion-asignaturas.component';
import { VistaGeneralComponent } from './ModuloAdmin/vista-general/vista-general.component';
import { VerTotalSolicitudesComponent } from './ModuloAdmin/ver-total-solicitudes/ver-total-solicitudes.component';
import { VerDetallesComponent } from './ModuloAdmin/ver-detalles/ver-detalles.component';
import { VistaGeneralSuperAdminComponent } from './ModuloSuperAdmin/vista-general-super-admin/vista-general-super-admin.component';
import { VistaTotalSolicitudesSuperAdminComponent } from './ModuloSuperAdmin/vista-total-solicitudes-super-admin/vista-total-solicitudes-super-admin.component';
import { VistaListadoAdminComponent } from './ModuloSuperAdmin/vista-listado-admin/vista-listado-admin.component';
import { VistaAgregarAdminComponent } from './ModuloSuperAdmin/vista-agregar-admin/vista-agregar-admin.component';
import { VistaABInstitutoComponent } from './ModuloSuperAdmin/vista-abinstituto/vista-abinstituto.component';
import { ABCarrerasComponent } from './ModuloAdmin/abcarreras/abcarreras.component';
import { VistaListadoDocentesComponent } from './ModuloAdmin/vista-listado-docentes/vista-listado-docentes.component';


const routes: Routes = [
{path: 'vista-add-materia/:instituto', component: VistaMateriaComponent},
{path: 'form-materia-docente', component: FormMateriaDocenteComponent},
{path: 'sesion-docente', component: SesionDocenteComponent},
{path: 'equivalencia-solicitadas', component: FormMateriaEquivalenciaComponent},
{path: 'seguimiento-solicitud', component: TablaSeguimientoComponent},
{path: 'signInDocente', component: SignInDocenteComponent},
{path: 'login', component: LoginComponent},
{path: '11111', component: VistaSeleccionComponent},
{path: '1111', component: VistaAprobacionComponent},
{path: 'solcitud', component: PasoAPasoSolicitudComponent},
{path: 'consulta', component: FormCodigoComponent},
{path: 'datoAlumno/:codigo', component: DatosAlumnoComponent},
{path: 'sesion-docente/:email', component: VistaSeleccionComponent},
{path: 'VistaAsignacion/:instituto', component: VistaAsignacionAsignaturasComponent},
{path: 'VistaAdmin/:usuario', component: VistaGeneralComponent},
{path: 'VistaSuperAdmin', component: VistaGeneralSuperAdminComponent},
{path: '', component: CuerpoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FormlogindocenteComponent,
    RegistrodocenteheadComponent,
    FormRegistroDocenteComponent,
    RegistrodocentefooterComponent,
    MenuBarDocenteComponent,
    TablaDocenteComponent,
    SesionDocenteComponent,
    FormMateriaEquivalenciaComponent,
    TablaMateriaEquivalenciaComponent,
    TablaSeguimientoComponent,
    FormMateriaDocenteComponent,
    TablaMateriasDocenteComponent,
    LoginComponent,
    SignInDocenteComponent,
    FormularioAlumnoComponent,
    FormularioEquivalenciaComponent,
    TablaAsignaturaEquivalenteComponent,
    TablaAsignaturaUNGSComponent,
    PasoAPasoSolicitudComponent,
    VistaMateriaComponent,
    TablaMateriasComponent,
    VistaAprobacionComponent,
    VistaSeleccionComponent,
    ToolbarComponent,
    FormCodigoComponent,
    TablaConsultaComponent,
    DatosAlumnoComponent,
    CuerpoComponent,
    VistaAsignacionAsignaturasComponent,
    VistaGeneralComponent,
    VerTotalSolicitudesComponent,
    VerDetallesComponent,
    VistaGeneralSuperAdminComponent,
    VistaTotalSolicitudesSuperAdminComponent,
    VistaListadoAdminComponent,
    VistaAgregarAdminComponent,
    VistaABInstitutoComponent,
    ABCarrerasComponent,
    VistaListadoDocentesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    RecaptchaModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
