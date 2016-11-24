import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.template.html',
    styleUrls: [
      './app.style.scss'
    ]
})
export class AppComponent {
    title = 'Angular 2 - Directives';
    classContainer = "container";
    classPanel = "panel";
    isPanel = false;
    toggleNgIfPanel = true;
    status = "ready";
}
