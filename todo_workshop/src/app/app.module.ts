import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasklistComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
