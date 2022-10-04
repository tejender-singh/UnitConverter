import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVolumeConverterComponent } from './app-volume-converter.component';

describe('AppVolumeConverterComponent', () => {
  let component: AppVolumeConverterComponent;
  let fixture: ComponentFixture<AppVolumeConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppVolumeConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVolumeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
