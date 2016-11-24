import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//Modules
import {HomeRoutingModule} from './home-routing.module';
//Components
import {HomeComponent} from './home.component';
@NgModule({
    imports: [CommonModule, HomeRoutingModule],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
