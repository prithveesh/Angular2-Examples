import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

//Components
import {AppComponent} from './app.component';
//Services
import {HTTPService} from './services/http.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [AppComponent],
    providers: [HTTPService],
    bootstrap: [AppComponent]
})
export class AppModule { }
