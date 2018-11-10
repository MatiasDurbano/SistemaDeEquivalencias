import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInDocenteComponent } from './sign-in-docente.component';

describe('SignInDocenteComponent', () => {
  let component: SignInDocenteComponent;
  let fixture: ComponentFixture<SignInDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
