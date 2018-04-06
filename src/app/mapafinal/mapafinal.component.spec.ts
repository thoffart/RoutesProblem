import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapafinalComponent } from './mapafinal.component';

describe('MapafinalComponent', () => {
  let component: MapafinalComponent;
  let fixture: ComponentFixture<MapafinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapafinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapafinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
