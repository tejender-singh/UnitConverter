import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './app-temperature-converter.component.html',
  styleUrls: ['./app-temperature-converter.component.scss'],
})
export class AppTemperatureConverterComponent implements OnInit {
  toDropdownExpanded = false;
  fromDropdownExpanded = false;
  units = ['Celcius', 'Kelvin', 'Fahrenheit'];
  from = 'Celcius';
  to = 'Kelvin';
  inputValue: number;
  outputValue: string;

  constructor() {}

  ngOnInit(): void {}

  toggleFromDropdown(): void {
    this.toDropdownExpanded = false;
    this.fromDropdownExpanded = !this.fromDropdownExpanded;
    console.log(this.inputValue);
  }

  toggleToDropdown(): void {
    this.fromDropdownExpanded = false;
    this.toDropdownExpanded = !this.toDropdownExpanded;
    console.log(this.inputValue);
  }

  fromSelected(unit: string): void {
    this.from = unit;
    this.fromDropdownExpanded = false;
    this.outputValue = this.inputValue ? this.convertValue(this.from, this.to).toFixed(2) : undefined;
  }

  toSelected(unit: string): void {
    this.to = unit;
    this.toDropdownExpanded = false;
    this.outputValue = this.inputValue ? this.convertValue(this.from, this.to).toFixed(2) : undefined;
  }

  onFromChanged(): void {
    this.outputValue = this.convertValue(this.from, this.to).toFixed(2);
  }

  convertValue(from: string, to: string): number {
    switch (from) {
      case 'Celcius': {
        switch (to) {
          case 'Celcius':
            return this.inputValue;
          case 'Kelvin':
            return this.convertFromCelciusToKelvin(this.inputValue);
          case 'Fahrenheit':
            return this.convertFromCelciusToFahrenheit(this.inputValue);
        }
        break;
      }
      case 'Kelvin': {
        switch (to) {
          case 'Celcius':
            return this.convertFromKelvinToCelcius(this.inputValue);
          case 'Kelvin':
            return this.inputValue;
          case 'Fahrenheit':
            return this.convertFromKelvinToFahrenheit(this.inputValue);
        }
        break;
      }
      case 'Fahrenheit': {
        switch (to) {
          case 'Celcius':
            return this.convertFromFahrenheitToCelcius(this.inputValue);
          case 'Kelvin':
            return this.convertFromFahrenheitToKelvin(this.inputValue);
          case 'Fahrenheit':
            return this.inputValue;
        }
        break;
      }
    }
  }

  convertFromCelciusToKelvin(value: number): number {
    return value + 273.15;
  }

  convertFromCelciusToFahrenheit(value: number): number {
    return value * (9 / 5) + 32;
  }

  convertFromFahrenheitToCelcius(value: number): number {
    return ((value - 32) * 5) / 9;
  }

  convertFromFahrenheitToKelvin(value: number): number {
    return ((value - 32) * 5) / 9 + 273.15;
  }

  convertFromKelvinToCelcius(value: number): number {
    return value - 273.15;
  }

  convertFromKelvinToFahrenheit(value: number): number {
    return ((value - 273.15) * 9) / 5 + 32;
  }
}
