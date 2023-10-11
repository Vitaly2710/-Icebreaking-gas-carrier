import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MainComponent} from "./pages/main/main.component";
import {FirstScreenComponent} from "./share/components/first-screen/first-screen.component";
import {MatIconModule} from '@angular/material/icon'
import {NewsComponent} from "./share/components/news/news.component";
import {HistoryComponent} from "./share/components/history/history.component";
import {PublicationComponent} from "./share/components/publication/publication.component";
import {ProjectsComponent} from "./share/components/projects/projects.component";
import {SecurityComponent} from "./share/components/security/security.component";
import {FooterComponent} from "./share/components/footer/footer.component";
import {RouterModule, Routes} from "@angular/router";
import {ServicesComponent} from "./pages/services/services.component";
import {HeaderComponent} from "./share/components/header/header.component";
import {ServiceInfoComponent} from "./share/components/service-info/service-info.component";

const appRoutes: Routes =[
  { path: '', component: MainComponent},
  { path: 'services', component: ServicesComponent},
  { path: '**', component: MainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FirstScreenComponent,
    NewsComponent,
    HistoryComponent,
    PublicationComponent,
    ProjectsComponent,
    SecurityComponent,
    FooterComponent,
    ServicesComponent,
    HeaderComponent,
    ServiceInfoComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
