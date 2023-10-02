import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MainComponent} from "./pages/main/main.component";
import {FirstScreenComponent} from "./share/components/first-screen/first-screen.component";
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FirstScreenComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
