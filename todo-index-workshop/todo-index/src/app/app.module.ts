import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponent } from './components/new.component';
import { UpdateComponent } from './components/update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoService} from "./todo.service";
import {RouterModule, Routes} from "@angular/router";
import { LandingComponent } from './components/landing.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'new', component: NewComponent},
  {path:'update', component: UpdateComponent}
  ]


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    UpdateComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
