
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSeguimientoComponent } from './tabla-seguimiento.component';

describe('TablaSeguimientoComponent', () => {
  let component: TablaSeguimientoComponent;
  let fixture: ComponentFixture<TablaSeguimientoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaSeguimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
