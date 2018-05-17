import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFavoritoComponent } from './detalle-favorito.component';

describe('DetalleFavoritoComponent', () => {
  let component: DetalleFavoritoComponent;
  let fixture: ComponentFixture<DetalleFavoritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleFavoritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
