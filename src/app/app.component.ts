import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  units = ['Temperature', 'Length', 'Area', 'Volume', 'Time', 'Date', 'Weight'];
  currentUnit = 'Temperature';
  backgroundImage= 'url(assets/images/temperature.jpg)';
  unitChanged = (unit: string) =>{
    this.currentUnit = unit;    
    this.backgroundImage = `url(assets/images/${this.currentUnit}.jpg)`;
  }
}
