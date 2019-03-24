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
	constructor(
		private fb: FormBuilder,
		private crudService: CrudService,
		private router: Router) {
		this.modelForm = this.fb.group({
			m_name: ['', Validators.required],
			desc: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
		});
	}

	ngOnInit() {
	}

	saveModel(values){
		const modelData = new FormData();
		modelData.append('m_name', values.m_name);
		//console.log(values);
		this.crudService.createModel(modelData).subscribe(result => {
			alert('Data Inserted Successfully...');
			this.router.navigate(['']);

		});
	}
}