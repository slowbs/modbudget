import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtotalComponent } from './formtotal.component';

describe('FormtotalComponent', () => {
  let component: FormtotalComponent;
  let fixture: ComponentFixture<FormtotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
