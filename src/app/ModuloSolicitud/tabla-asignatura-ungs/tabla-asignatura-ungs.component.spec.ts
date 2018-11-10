import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAsignaturaUNGSComponent } from './tabla-asignatura-ungs.component';

describe('TablaAsignaturaUNGSComponent', () => {
  let component: TablaAsignaturaUNGSComponent;
  let fixture: ComponentFixture<TablaAsignaturaUNGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAsignaturaUNGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAsignaturaUNGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
