import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAsignacionAsignaturasComponent } from './vista-asignacion-asignaturas.component';

describe('VistaAsignacionAsignaturasComponent', () => {
  let component: VistaAsignacionAsignaturasComponent;
  let fixture: ComponentFixture<VistaAsignacionAsignaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAsignacionAsignaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAsignacionAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
