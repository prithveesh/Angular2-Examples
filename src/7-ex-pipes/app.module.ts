import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

//Components
import {AppComponent} from './app.component';
//Pipes
import {OrderByPipe} from './pipes/orderby.pipe';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent, OrderByPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
