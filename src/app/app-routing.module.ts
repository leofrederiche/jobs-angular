import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { JobsIndexComponent } from 'src/app/pages/jobs-index/jobs-index.component';
import { JobsShowComponent } from './pages/jobs-show/jobs-show.component';

const routes: Routes = [
  { path: "", component: AuthComponent },
  { path: "jobs", component: JobsIndexComponent },
  { path: "jobs-details/:id", component: JobsShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
