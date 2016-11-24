import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

//Components
import {AppComponent} from './app.component';
import {FirstChildComponent} from './components/first-child.component';
import {SecondChildComponent} from './components/second-child.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent, FirstChildComponent, SecondChildComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
