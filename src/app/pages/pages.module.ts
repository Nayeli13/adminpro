import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {pages_routes} from './pages.routes';

import { DeshboardComponent } from './deshboard/deshboard.component';
import { ProgressComponent } from './/progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    DeshboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  
  ],
  exports:[
    DeshboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent 
  ],
  imports: [
    CommonModule,
    SharedModule,
    pages_routes
  ]
})
export class PagesModule { }
