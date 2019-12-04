import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportactivityComponent } from './reportactivity.component';

describe('ReportactivityComponent', () => {
  let component: ReportactivityComponent;
  let fixture: ComponentFixture<ReportactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
