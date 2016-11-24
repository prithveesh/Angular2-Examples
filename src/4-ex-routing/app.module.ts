import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

//Modules
import {AppRoutingModule} from './routes.module';

//Components
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
