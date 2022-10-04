import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition('0 => 1', [
        animate(500, style({ opacity: 0.4 })),
      ]),
      transition('1 => 0', [
        animate(500, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  dropdownExpanded = false;
  units = ['Temperature', 'Length', 'Area', 'Volume', 'Time', 'Date', 'Weight'];
  fadeStatus = '1';
  currentUnit = 'Temperature';
  backgroundImage = 'url(assets/images/temperature.jpg)';

  unitChanged(unit: string): void{
    this.currentUnit = unit;
    this.fadeStatus = '0';
    this.dropdownExpanded = false;
    setTimeout(() => {
      this.backgroundImage = `url(assets/images/${this.currentUnit}.jpg)`;
      this.fadeStatus = '1';
    }, 400);
  }

  toggleDropdown(): void{
    this.dropdownExpanded = !this.dropdownExpanded;
  }
}
