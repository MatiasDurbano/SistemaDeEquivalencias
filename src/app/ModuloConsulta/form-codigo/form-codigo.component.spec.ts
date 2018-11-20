import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCodigoComponent } from './form-codigo.component';

describe('FormCodigoComponent', () => {
  let component: FormCodigoComponent;
  let fixture: ComponentFixture<FormCodigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCodigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
