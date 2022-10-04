import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLengthConverterComponent } from './app-length-converter.component';

describe('AppLengthConverterComponent', () => {
  let component: AppLengthConverterComponent;
  let fixture: ComponentFixture<AppLengthConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLengthConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLengthConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
