import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGeneralSuperAdminComponent } from './vista-general-super-admin.component';

describe('VistaGeneralSuperAdminComponent', () => {
  let component: VistaGeneralSuperAdminComponent;
  let fixture: ComponentFixture<VistaGeneralSuperAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaGeneralSuperAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaGeneralSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
