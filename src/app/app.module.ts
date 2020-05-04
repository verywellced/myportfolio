import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './elements/top-navbar/top-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './elements/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    HomeComponent,
    ContactsComponent,
    ResumeComponent,
    AboutComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
