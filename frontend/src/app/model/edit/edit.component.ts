import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {Router, ActivatedRoute} from "@angular/router";
declare var $;

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditModel implements OnInit {
	mID: any;
	mData: any;
	constructor(
		private crudService: CrudService,
		private router: Router,
		private actRoute: ActivatedRoute) { }

	ngOnInit() {
		this.mID = this.actRoute.snapshot.params['id'];
		this.loadModelDetails(this.mID);
	}

	loadModelDetails(mID){
		this.crudService.updateModel(mID).subscribe(manufacturer => {
			this.mData = manufacturer;
		});
	}

	navigation(link){
		this.router.navigate([link]);
	}
}
