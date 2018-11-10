import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlogindocenteComponent } from './formlogindocente.component';

describe('FormlogindocenteComponent', () => {
  let component: FormlogindocenteComponent;
  let fixture: ComponentFixture<FormlogindocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlogindocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlogindocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
