import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUnitSelectorComponent } from './app-unit-selector.component';

describe('AppUnitSelectorComponent', () => {
  let component: AppUnitSelectorComponent;
  let fixture: ComponentFixture<AppUnitSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUnitSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUnitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
