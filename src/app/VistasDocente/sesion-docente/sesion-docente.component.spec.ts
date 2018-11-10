import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionDocenteComponent } from './sesion-docente.component';

describe('SesionDocenteComponent', () => {
  let component: SesionDocenteComponent;
  let fixture: ComponentFixture<SesionDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
