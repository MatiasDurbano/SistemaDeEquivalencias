import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTotalSolicitudesSuperAdminComponent } from './vista-total-solicitudes-super-admin.component';

describe('VistaTotalSolicitudesSuperAdminComponent', () => {
  let component: VistaTotalSolicitudesSuperAdminComponent;
  let fixture: ComponentFixture<VistaTotalSolicitudesSuperAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaTotalSolicitudesSuperAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTotalSolicitudesSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
