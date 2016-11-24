import {Component, Input} from '@angular/core';

@Component({
    selector: 'first-child',
    template: '<h3>{{name}}</h3>'
})
export class FirstChildComponent {
    @Input() name: String;
}
