import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTemperatureConverterComponent } from './app-temperature-converter.component';

describe('AppTemperatureConverterComponent', () => {
  let component: AppTemperatureConverterComponent;
  let fixture: ComponentFixture<AppTemperatureConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTemperatureConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTemperatureConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
