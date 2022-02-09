import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";

import { MainComponent } from './components/main.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OneComponent } from './components/one.component';
import { NumbersComponent } from './components/numbers.component';
import {NumberGuardService} from "./number-guard.service";
import {RandomInject} from "./randomInject";

//routes to import
const appRoutes : Routes = [
  {path: '' , component:MainComponent},
  {path: '1', component:OneComponent},
  //able to add canActivate canDeactivate and if the conditions are met, page will load or go back
  {
    path: 'number/:num', component: NumbersComponent,
    canActivate: [NumberGuardService]
  },
  {path: '**', component:MainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OneComponent,
    NumbersComponent,
  ],
  imports: [
    BrowserModule,
    //to import router module for root and route address/component
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NumberGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
