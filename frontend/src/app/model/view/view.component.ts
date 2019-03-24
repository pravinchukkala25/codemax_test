import { Component, OnInit, ViewChild } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {Router} from "@angular/router";
declare var $;

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})

export class ViewModel implements OnInit {
	public models: any = [];

	@ViewChild('modelsTable') Table;

	public dataTable: any;

	constructor(private crudService: CrudService, private router: Router) { }

	ngOnInit() {
		this.loadModel();
	}

	loadModel(){
		this.crudService.getModel().subscribe(
			modelData => {
				this.models = modelData;
				this.dataTable = $(this.Table.nativeElement);
				setTimeout(()=>{this.dataTable.DataTable();}, 1000);
			}
			);
	}

	removeModel(id){
		var data={'m_id': id}; 
		this.crudService.soldModel(id).subscribe(result => {
			alert('Data Deleted Successfully');
			this.ngOnInit();
		});
	}

	getNavigation(link, id){
		if(id === ''){
			this.router.navigate([link]);
		} else {
			this.router.navigate([link + '/' + id]);
		}
	}
}
