import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodocentefooterComponent } from './registrodocentefooter.component';

describe('RegistrodocentefooterComponent', () => {
  let component: RegistrodocentefooterComponent;
  let fixture: ComponentFixture<RegistrodocentefooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrodocentefooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrodocentefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
