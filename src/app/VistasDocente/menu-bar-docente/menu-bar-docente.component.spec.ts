
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuBarDocenteComponent } from './menu-bar-docente.component';

describe('MenuBarDocenteComponent', () => {
  let component: MenuBarDocenteComponent;
  let fixture: ComponentFixture<MenuBarDocenteComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MenuBarDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
