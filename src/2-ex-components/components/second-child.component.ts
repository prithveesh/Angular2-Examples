import {Component, Input} from '@angular/core';

@Component({
    selector: 'second-child',
    inputs: ['name'],
    template: '<h3>{{name}}</h3>'
})
export class SecondChildComponent {
    name: String;
}
