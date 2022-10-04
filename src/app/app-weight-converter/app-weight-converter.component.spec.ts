import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWeightConverterComponent } from './app-weight-converter.component';

describe('AppWeightConverterComponent', () => {
  let component: AppWeightConverterComponent;
  let fixture: ComponentFixture<AppWeightConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWeightConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWeightConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
