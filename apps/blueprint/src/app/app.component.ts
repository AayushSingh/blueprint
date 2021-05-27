import { Component } from '@angular/core';

@Component({
  selector: 'blueprint-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blueprint';
  isValidated = false;
  cityList = ["New York", "Delhi", "Mumbai", "San Jose"];
  countryList = ["India", "US", "Germany", "France"];


  submitForm(event: any): void {
    event.preventDefault();    
    this.isValidated = true;
  }

  responseFromLib(event: any, type: string): void{
    console.log(event);
  }
}
