import {Component, OnInit} from '@angular/core';
import {HTTPService} from './services/http.service'
@Component({
    selector: 'my-app',
    templateUrl: './app.template.html'
})
export class AppComponent implements OnInit {
    title = 'Angular 2 - Services';
    data : Object;
    constructor(private httpService: HTTPService) {}

    ngOnInit() {
      this.httpService.getData().then(response => this.data = response);
    }
}
