import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSolicitudEquivalenciaComponent } from './vista-solicitud-equivalencia.component';

describe('VistaSolicitudEquivalenciaComponent', () => {
  let component: VistaSolicitudEquivalenciaComponent;
  let fixture: ComponentFixture<VistaSolicitudEquivalenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSolicitudEquivalenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSolicitudEquivalenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
