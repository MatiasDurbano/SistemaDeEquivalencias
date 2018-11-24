import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAsignacionAsignaturasComponent } from './modulo-asignacion-asignaturas.component';

describe('ModuloAsignacionAsignaturasComponent', () => {
  let component: ModuloAsignacionAsignaturasComponent;
  let fixture: ComponentFixture<ModuloAsignacionAsignaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloAsignacionAsignaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloAsignacionAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
