import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {Router, ActivatedRoute} from "@angular/router";
declare var $;

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
	mID: any;
	mData: any;
	constructor(
		private crudService: CrudService,
		private router: Router,
		private actRoute: ActivatedRoute) { }

	ngOnInit() {
		this.mID = this.actRoute.snapshot.params['id'];
		this.loadProductDetails(this.mID);
	}

	loadProductDetails(mID){
		this.crudService.updateManufacturer(mID).subscribe(manufacturer => {
			this.mData = manufacturer;
		});
	}

	navigation(link){
		this.router.navigate([link]);
	}
}
