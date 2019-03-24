import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ViewComponent } from './crud/view/view.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RemoveComponent } from './crud/remove/remove.component';
import { EditComponent } from './model/edit/edit.component';

@NgModule({
  declarations: [
  AppComponent,
  ViewComponent,
  CreateComponent,
  UpdateComponent,
  RemoveComponent,
  EditComponent,
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
