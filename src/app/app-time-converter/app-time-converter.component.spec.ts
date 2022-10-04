import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTimeConverterComponent } from './app-time-converter.component';

describe('AppTimeConverterComponent', () => {
  let component: AppTimeConverterComponent;
  let fixture: ComponentFixture<AppTimeConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTimeConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTimeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
