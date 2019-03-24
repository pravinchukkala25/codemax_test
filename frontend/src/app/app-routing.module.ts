import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewComponent} from "./manufacture/view/view.component";
import {CreateComponent} from "./manufacture/create/create.component";

import {ViewModel} from "./model/view/view.component";
import {CreateModel} from "./model/create/create.component";

const routes: Routes = [
{path: 'manufacture', component: ViewComponent},
{path: 'manufacture/create', component: CreateComponent},
{path: 'model', component: ViewModel},
{path: 'model/create', component: CreateModel}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
