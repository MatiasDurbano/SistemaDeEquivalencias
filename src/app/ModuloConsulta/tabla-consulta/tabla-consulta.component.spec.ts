import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConsultaComponent } from './tabla-consulta.component';

describe('TablaConsultaComponent', () => {
  let component: TablaConsultaComponent;
  let fixture: ComponentFixture<TablaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
