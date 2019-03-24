import { Component } from '@angular/core';
import {CrudService} from "./services/crud.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Inventory Management';
	constructor(private crudService: CrudService, private router: Router) { }
	getNavigation(link, id){
		if(id === ''){
			this.router.navigate([link]);
		} else {
			this.router.navigate([link + '/' + id]);
		}
	}
}
