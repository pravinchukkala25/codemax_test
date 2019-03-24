import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class CrudService {
	//base url
	public url = 'http://localhost/codemax_test/';

	constructor(private http: HttpClient) { }

	getmanufacturers(){
		return this.http.get(this.url+'manufacturer/view');
	}

	createManufacturer(data){
		return this.http.post(this.url + 'manufacturer/add', data);
	}

	updateManufacturer(data){
		return this.http.post(this.url + 'manufacturer/edit', data);
	}

	deleteManufacturer(id){
		console.log(id);
		return this.http.get(this.url + 'manufacturer/remove/' + id);
	}


}