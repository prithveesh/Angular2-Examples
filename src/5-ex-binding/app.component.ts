import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.template.html',
    styleUrls: [
      './app.style.scss'
    ]
})
export class AppComponent {
    title = 'Angular 2 - Binding';
    value = "Interpolation";
    isDisabled: boolean;
    private inputValue : String;
    constructor() {
      this.isDisabled = false;
      this.inputValue = "Default Value";
    }
    toggleButton() {
      this.isDisabled = !this.isDisabled;
      alert("Disabled: " + this.isDisabled);
    }
}
