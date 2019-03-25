import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
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
	modelForm: FormGroup;
	mData: any;
	public manufactures: any = [];
	constructor(
		private fb: FormBuilder,
		private crudService: CrudService,
		private router: Router,
		private actRoute: ActivatedRoute) { 
		this.modelForm = this.fb.group({
			model_name: ['', Validators.required],
			color: ['', Validators.required],
			reg_no: ['', Validators.required],
			m_id: ['', Validators.required],
			m_date: ['', Validators.required]
		});
	}

	ngOnInit() {
		this.mID = this.actRoute.snapshot.params['id'];
		this.loadModelDetails(this.mID);
		this.loadManufacturer();
	}

	loadModelDetails(mID){
		this.crudService.updateModel(mID).subscribe(modelData => {
			this.mData = modelData;
		});
	}

	loadManufacturer(){
		this.crudService.getmanufacturers().subscribe(
			manufactureData => {
				this.manufactures = manufactureData;
			}
			);
	}



	saveModel(values){
		const modelData = new FormData();
		modelData.append('model_name', values.model_name);
		modelData.append('color', values.color);
		modelData.append('m_id', values.m_id);
		modelData.append('reg_no', values.reg_no);
		modelData.append('note', values.note);
		modelData.append('m_date', values.m_date);
		console.log(values);
		this.crudService.createModel(modelData).subscribe(result => {
			alert('Data Inserted Successfully...');
			this.router.navigate(['']);

		});
	}

	navigation(link){
		this.router.navigate([link]);
	}
}
