import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App_Routes } from './routes';
import { PagesModule } from './pages/pages.module';


App_Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { RegisterComponent } from './loging/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';






@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    RegisterComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App_Routes,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
