import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-remove',
	templateUrl: './remove.component.html',
	styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

	constructor(private crudService: CrudService,
		private router: Router) { }

	ngOnInit() {
		alert('Data Deleted Successfully...');
		//this.router.navigate(['']);
	}

}
