import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoApasoComponent } from './paso-apaso.component';

describe('PasoApasoComponent', () => {
  let component: PasoApasoComponent;
  let fixture: ComponentFixture<PasoApasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasoApasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasoApasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
