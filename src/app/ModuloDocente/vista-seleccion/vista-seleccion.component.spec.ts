import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSeleccionComponent } from './vista-seleccion.component';

describe('VistaSeleccionComponent', () => {
  let component: VistaSeleccionComponent;
  let fixture: ComponentFixture<VistaSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
