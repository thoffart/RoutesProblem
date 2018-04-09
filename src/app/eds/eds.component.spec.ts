/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EdsComponent } from './eds.component';

describe('EdsComponent', () => {
  let component: EdsComponent;
  let fixture: ComponentFixture<EdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
