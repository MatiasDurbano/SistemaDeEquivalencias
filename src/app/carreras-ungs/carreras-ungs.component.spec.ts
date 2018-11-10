import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasUNGSComponent } from './carreras-ungs.component';

describe('CarrerasUNGSComponent', () => {
  let component: CarrerasUNGSComponent;
  let fixture: ComponentFixture<CarrerasUNGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerasUNGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerasUNGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
