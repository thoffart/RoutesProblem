import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsmapsComponent } from './formsmaps.component';

describe('FormsmapsComponent', () => {
  let component: FormsmapsComponent;
  let fixture: ComponentFixture<FormsmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
