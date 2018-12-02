import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaListadoAdminComponent } from './vista-listado-admin.component';

describe('VistaListadoAdminComponent', () => {
  let component: VistaListadoAdminComponent;
  let fixture: ComponentFixture<VistaListadoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaListadoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaListadoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
