import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormactivityComponent } from './formactivity.component';

describe('FormactivityComponent', () => {
  let component: FormactivityComponent;
  let fixture: ComponentFixture<FormactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
