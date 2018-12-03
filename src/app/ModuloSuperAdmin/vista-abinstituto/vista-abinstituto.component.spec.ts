import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaABInstitutoComponent } from './vista-abinstituto.component';

describe('VistaABInstitutoComponent', () => {
  let component: VistaABInstitutoComponent;
  let fixture: ComponentFixture<VistaABInstitutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaABInstitutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaABInstitutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
