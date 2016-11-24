import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

//Components
import {AppComponent} from './app.component';

//Directives
import {HighlightDirective} from './highlight.directive';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent, HighlightDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }
