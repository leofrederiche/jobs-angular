import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { JobsIndexComponent } from 'src/app/pages/jobs-index/jobs-index.component';

import { SessionService } from './services/session.services';

const sessionService = new SessionService;
console.log("session: ", sessionService.isLogged()) // # => TRUE

const routes: Routes = [
  { path: "", component: AuthComponent },
  { path: "jobs", component: JobsIndexComponent,  canActivate: [() => inject(sessionService.isLogged)] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
