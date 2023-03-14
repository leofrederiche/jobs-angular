import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Interfaces
import "src/app/interfaces/error.interfaces"
import "src/app/interfaces/user.interfaces"
import "src/app/interfaces/jobs.interface"

// Pages
import { AuthComponent } from './pages/auth/auth.component';
import { JobsIndexComponent } from "./pages/jobs-index/jobs-index.component";
import { JobsShowComponent } from './pages/jobs-show/jobs-show.component';

@NgModule({
  declarations: [
    AppComponent,

    AuthComponent,

    JobsIndexComponent,
    JobsShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
