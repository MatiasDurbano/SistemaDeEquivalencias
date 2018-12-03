import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCarrerasComponent } from './abcarreras.component';

describe('ABCarrerasComponent', () => {
  let component: ABCarrerasComponent;
  let fixture: ComponentFixture<ABCarrerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABCarrerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
