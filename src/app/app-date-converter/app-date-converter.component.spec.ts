import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDateConverterComponent } from './app-date-converter.component';

describe('AppDateConverterComponent', () => {
  let component: AppDateConverterComponent;
  let fixture: ComponentFixture<AppDateConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDateConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDateConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
