import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ViewComponent } from './manufacture/view/view.component';
import { CreateComponent } from './manufacture/create/create.component';
import { ViewModel } from './model/view/view.component';
import { CreateModel } from './model/create/create.component';
import { EditModel } from './model/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
  AppComponent,
  ViewComponent,
  CreateComponent,
  ViewModel,
  CreateModel,
  EditModel
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
