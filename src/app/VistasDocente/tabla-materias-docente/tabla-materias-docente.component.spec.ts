
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMateriasDocenteComponent } from './tabla-materias-docente.component';

describe('TablaMateriasDocenteComponent', () => {
  let component: TablaMateriasDocenteComponent;
  let fixture: ComponentFixture<TablaMateriasDocenteComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMateriasDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMateriasDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
