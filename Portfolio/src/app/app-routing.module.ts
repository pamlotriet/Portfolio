import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { MyWorkComponent } from './MyWork/my-work/my-work.component';
import { AboutMeComponent } from './AboutMe/about-me/about-me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './ContactMe/contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '', component:HomePageComponent
  },
  {
    path: 'aboutme',component: AboutMeComponent
  },
  {
    path: 'mywork',component:MyWorkComponent
  },
  {
    path: 'contactme',component:ContactMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent,AboutMeComponent,MyWorkComponent]
