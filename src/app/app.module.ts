import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App_Routes } from './routes';

App_Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DeshboardComponent } from './pages/deshboard/deshboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './loging/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    NopagefoundComponent,
    DeshboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App_Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
