
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDocenteComponent } from './tabla-docente.component';

describe('TablaDocenteComponent', () => {
  let component: TablaDocenteComponent;
  let fixture: ComponentFixture<TablaDocenteComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
