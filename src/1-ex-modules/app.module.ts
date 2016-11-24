import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

//Components
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
