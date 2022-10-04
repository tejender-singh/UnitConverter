import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppUnitSelectorComponent } from './app-unit-selector/app-unit-selector.component';
import { AppTemperatureConverterComponent } from './app-temperature-converter/app-temperature-converter.component';
import { AppLengthConverterComponent } from './app-length-converter/app-length-converter.component';
import { AppAreaConverterComponent } from './app-area-converter/app-area-converter.component';
import { AppVolumeConverterComponent } from './app-volume-converter/app-volume-converter.component';
import { AppTimeConverterComponent } from './app-time-converter/app-time-converter.component';
import { AppDateConverterComponent } from './app-date-converter/app-date-converter.component';
import { AppWeightConverterComponent } from './app-weight-converter/app-weight-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppUnitSelectorComponent,
    AppTemperatureConverterComponent,
    AppLengthConverterComponent,
    AppAreaConverterComponent,
    AppVolumeConverterComponent,
    AppTimeConverterComponent,
    AppDateConverterComponent,
    AppWeightConverterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
