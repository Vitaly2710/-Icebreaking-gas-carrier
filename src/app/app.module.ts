import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MainComponent} from "./pages/main/main.component";
import {FirstScreenComponent} from "./share/components/first-screen/first-screen.component";
import {MatIconModule} from '@angular/material/icon'
import {NewsComponent} from "./share/components/news/news.component";
import {HistoryComponent} from "./share/components/history/history.component";
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FirstScreenComponent,
    NewsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
