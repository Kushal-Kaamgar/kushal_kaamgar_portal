import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from "./auth/sign-in/sign-in.component";


@NgModule({
    declarations: [
        AuthComponent
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [],
    imports: [
        BrowserModule,
        SignInComponent,
        AuthComponent
    ]
})
export class AppModule { }
