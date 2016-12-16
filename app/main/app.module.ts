import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouter } from '../routes/app.router';
import { HomeComponent } from '../home/home.component';

@NgModule({
    imports: [BrowserModule, AppRouter],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}