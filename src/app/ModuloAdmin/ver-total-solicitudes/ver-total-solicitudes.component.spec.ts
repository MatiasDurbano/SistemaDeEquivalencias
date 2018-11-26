import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTotalSolicitudesComponent } from './ver-total-solicitudes.component';

describe('VerTotalSolicitudesComponent', () => {
  let component: VerTotalSolicitudesComponent;
  let fixture: ComponentFixture<VerTotalSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTotalSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTotalSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
