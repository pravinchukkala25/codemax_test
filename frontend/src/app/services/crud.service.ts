import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class CrudService {
	//base url
	public url = 'http://localhost/codemax_test/';

	constructor(private http: HttpClient) { }

	/* Manufacturer Crud Operations =============== */
	getmanufacturers(){
		return this.http.get(this.url+'manufacturer/view');
	}

	createManufacturer(data){
		return this.http.post(this.url + 'manufacturer/add', data);
	}

	deleteManufacturer(id){
		console.log(id);
		return this.http.get(this.url + 'manufacturer/remove/' + id);
	}

	/* Model Crud Operations =============== */
	/* View Model */
	getModel(){
		return this.http.get(this.url+'model/viewModel');
	}

	/* Create Model */
	createModel(data){
		return this.http.post(this.url + 'model/addModel', data);
	}

	/* Edit Model */
	editModel(id){
		return this.http.get(this.url+'model/editModel'+id);
	}

	/* Update Model */
	updateModel(data){
		return this.http.post(this.url + 'model/edit', data);
	}

	/* Delete Model */
	soldModel(id){
		console.log(id);
		return this.http.get(this.url + 'model/removeModel/' + id);
	}


}