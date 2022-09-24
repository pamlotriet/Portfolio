import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { ContactMeComponent } from './ContactMe/contact-me/contact-me.component';
import { HttpClientModule } from '@angular/common/http'; 
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    routingComponents,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
