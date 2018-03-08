import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapainicioComponent } from './mapainicio.component';

describe('MapainicioComponent', () => {
  let component: MapainicioComponent;
  let fixture: ComponentFixture<MapainicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapainicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapainicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
