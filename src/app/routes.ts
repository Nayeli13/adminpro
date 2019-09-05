import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DeshboardComponent } from './pages/deshboard/deshboard.component';
import { LogingComponent } from './loging/loging.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './loging/register.component';

const appRoutes: Routes = [
  {
    path: '', 
    component: PagesComponent,
    children:[
      {path: 'deshboard', component: DeshboardComponent},
      {path: 'progress', component: ProgressComponent  },
      {path: 'grafica1', component: Graficas1Component },
      {path: '', redirectTo: '/desboard', pathMatch:'full'},
    ]
  },
  {path: 'login', component: LogingComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagefoundComponent}
];

export const App_Routes = RouterModule.forRoot(appRoutes, {useHash:true});
