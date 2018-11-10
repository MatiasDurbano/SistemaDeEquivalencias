import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAprobacionComponent } from './vista-aprobacion.component';

describe('VistaAprobacionComponent', () => {
  let component: VistaAprobacionComponent;
  let fixture: ComponentFixture<VistaAprobacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAprobacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
