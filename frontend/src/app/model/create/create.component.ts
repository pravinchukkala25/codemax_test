import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CrudService} from "../../services/crud.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateModel implements OnInit {
	modelForm: FormGroup;
	public manufactures: any = [];
	constructor(
		private fb: FormBuilder,
		private crudService: CrudService,
		private router: Router) {
		this.modelForm = this.fb.group({
			model_name: ['', Validators.required],
			color: ['', Validators.required],
			reg_no: ['', Validators.required],
			m_id: ['', Validators.required],
			m_date: ['', Validators.required]
		});
	}

	ngOnInit() {
		this.loadManufacturer();
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
}