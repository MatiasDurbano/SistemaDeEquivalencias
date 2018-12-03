import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaListadoDocentesComponent } from './vista-listado-docentes.component';

describe('VistaListadoDocentesComponent', () => {
  let component: VistaListadoDocentesComponent;
  let fixture: ComponentFixture<VistaListadoDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaListadoDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaListadoDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
