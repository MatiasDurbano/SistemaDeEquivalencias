import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroDocenteComponent } from './form-registro-docente.component';

describe('FormRegistroDocenteComponent', () => {
  let component: FormRegistroDocenteComponent;
  let fixture: ComponentFixture<FormRegistroDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistroDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistroDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
