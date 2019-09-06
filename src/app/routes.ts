import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LogingComponent } from './loging/loging.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegisterComponent } from './loging/register.component';

const appRoutes: Routes = [
  {path: 'login', component: LogingComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagefoundComponent}
];

export const App_Routes = RouterModule.forRoot(appRoutes, {useHash:true});
