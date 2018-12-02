import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAgregarAdminComponent } from './vista-agregar-admin.component';

describe('VistaAgregarAdminComponent', () => {
  let component: VistaAgregarAdminComponent;
  let fixture: ComponentFixture<VistaAgregarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAgregarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAgregarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
