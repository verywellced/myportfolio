import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CarouselComponent } from './elements/carousel/carousel.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "contacts",
    component: ContactsComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "resume",
    component: ResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
