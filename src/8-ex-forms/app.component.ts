import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: './app.template.html',
    styleUrls: [
        './app.style.scss'
    ]
})
export class AppComponent {
    title = 'Angular 2 - Forms';
    form: FormGroup;
    fieldValues: Object;
    constructor( @Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            designation: ['', Validators.required],
            domain: "Creative",
            careerStage: '',
            team: 'Experiences: SCG-Front End Development',
            practice: 'XT',
            unit: 'SNINDIA',
            region: 'IND',
            metro: 'Gurgaon',
            billableStatus: '',
            allocationStatus: ''
        });
        this.fieldValues = {
            metro: ["NOIDA", "Gurgaon"],
            billableStatus: [
                "Billable", "Allocated", "OnHold"
            ],
            allocationStatus: ["Allocated", "Beach"]
        };
    }
}
