import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";

import { MainComponent } from './components/main.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OneComponent } from './components/one.component';

//routes to import
const appRoutes : Routes = [
  {path: '' , component:MainComponent},
  {path: '1', component:OneComponent},
  {path: '**', component:MainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OneComponent,
  ],
  imports: [
    BrowserModule,
    //to import router module for root and route address/component
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
