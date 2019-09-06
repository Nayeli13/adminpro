import {ModuleWithProviders} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes =[
    {path: '', 
    component: PagesComponent,
    children:[
      {path: 'deshboard', component: DeshboardComponent},
      {path: 'progress', component: ProgressComponent  },
      {path: 'grafica1', component: Graficas1Component },
      {path: '', redirectTo: 'desboard', pathMatch:'full'},
    ]}
];

export const pages_routes = RouterModule.forChild(pagesRoutes);