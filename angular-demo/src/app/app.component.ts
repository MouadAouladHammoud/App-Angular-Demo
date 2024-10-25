import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';

  phoneNumber: string = '';
  phoneNumber2: string = '';

  onInputChange(value: string) {
    console.log("Valeur changée: ", value);
    this.phoneNumber2 = value;
  }
}
