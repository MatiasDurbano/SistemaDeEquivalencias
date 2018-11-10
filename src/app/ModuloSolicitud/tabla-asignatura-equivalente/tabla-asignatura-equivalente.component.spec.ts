import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAsignaturaEquivalenteComponent } from './tabla-asignatura-equivalente.component';

describe('TablaAsignaturaEquivalenteComponent', () => {
  let component: TablaAsignaturaEquivalenteComponent;
  let fixture: ComponentFixture<TablaAsignaturaEquivalenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAsignaturaEquivalenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAsignaturaEquivalenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
