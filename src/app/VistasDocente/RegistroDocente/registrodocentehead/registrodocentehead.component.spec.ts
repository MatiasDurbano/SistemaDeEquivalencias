import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodocenteheadComponent } from './registrodocentehead.component';

describe('RegistrodocenteheadComponent', () => {
  let component: RegistrodocenteheadComponent;
  let fixture: ComponentFixture<RegistrodocenteheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrodocenteheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrodocenteheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
