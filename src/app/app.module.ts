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
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatStepperModule, MatInputModule } from '@angular/material';
import { TablaDocenteComponent } from './VistasDocente/tabla-docente/tabla-docente.component';0
import { SesionDocenteComponent } from './VistasDocente/sesion-docente/sesion-docente.component';
import { FormMateriaEquivalenciaComponent } from './VistasAlumno/SolicitudEquivalencia/form-materia-equivalencia/form-materia-equivalencia.component';
import { TablaMateriaEquivalenciaComponent } from './VistasAlumno/SolicitudEquivalencia/tabla-materia-equivalencia/tabla-materia-equivalencia.component';
import { TablaSeguimientoComponent } from './VistasAlumno/SeguimientoSolicitud/tabla-seguimiento/tabla-seguimiento.component';
import { FormMateriaDocenteComponent } from './VistasDocente/form-materia-docente/form-materia-docente.component';
import { TablaMateriasDocenteComponent } from './VistasDocente/tabla-materias-docente/tabla-materias-docente.component';
import {MaterialModule} from './materialConfig';
import { CarrerasUNGSComponent } from './carreras-ungs/carreras-ungs.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { LoginComponent } from './login/login.component';
import { PasoApasoComponent } from './paso-apaso/paso-apaso.component';
import { SignInDocenteComponent } from './sign-in-docente/sign-in-docente.component';
import { VistaSolicitudEquivalenciaComponent } from './vista-solicitud-equivalencia/vista-solicitud-equivalencia.component';
import { PropuestasSolicitudEquivalenciaComponent } from './vista-solicitud-equivalencia/propuestas-solicitud-equivalencia/propuestas-solicitud-equivalencia.component';
import { TablaSolicitudEquivalenciaComponent } from './vista-solicitud-equivalencia/tabla-solicitud-equivalencia/tabla-solicitud-equivalencia.component';
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

const routes: Routes = [
{path: 'vista-add-materia/:instituto', component: VistaMateriaComponent},
{path: 'form-materia-docente', component: FormMateriaDocenteComponent},
{path: 'sesion-docente', component: SesionDocenteComponent},
{path: '23231', component: PasoAPasoSolicitudComponent},
{path: 'equivalencia-solicitadas', component: FormMateriaEquivalenciaComponent},
{path: 'seguimiento-solicitud', component: TablaSeguimientoComponent},
{path: '11', component: SignInDocenteComponent},
{path: '', component: LoginComponent},
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
    CarrerasUNGSComponent,
    MenuPrincipalComponent,
    LoginComponent,
    PasoApasoComponent,
    SignInDocenteComponent,
    VistaSolicitudEquivalenciaComponent,
    PropuestasSolicitudEquivalenciaComponent,
    TablaSolicitudEquivalenciaComponent,
    FormularioAlumnoComponent,
    FormularioEquivalenciaComponent,
    TablaAsignaturaEquivalenteComponent,
    TablaAsignaturaUNGSComponent,
    PasoAPasoSolicitudComponent,
    VistaMateriaComponent,
    TablaMateriasComponent,
    VistaAprobacionComponent,
    VistaSeleccionComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
