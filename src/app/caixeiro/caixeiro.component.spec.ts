import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixeiroComponent } from './caixeiro.component';

describe('CaixeiroComponent', () => {
  let component: CaixeiroComponent;
  let fixture: ComponentFixture<CaixeiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixeiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
