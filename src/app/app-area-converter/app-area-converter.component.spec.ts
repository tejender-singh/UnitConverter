import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAreaConverterComponent } from './app-area-converter.component';

describe('AppAreaConverterComponent', () => {
  let component: AppAreaConverterComponent;
  let fixture: ComponentFixture<AppAreaConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAreaConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAreaConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
