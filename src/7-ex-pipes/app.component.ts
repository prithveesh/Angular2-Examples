import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.template.html'
})
export class AppComponent implements OnInit {
    title = 'Angular 2 - Pipes';
    list : Array<Object>;
    sortBy = 'id';
    ngOnInit() {
      this.list = [
        {id: 4, name: 'Sam', age: 10},
        {id: 2, name: 'Van', age: 10},
        {id: 1, name: 'Tom', age: 20},
        {id: 5, name: 'Ryan', age: 14},
        {id: 7, name: 'Timi', age: 5},
        {id: 5, name: 'Lisa', age: 11}
      ]
    }
}
