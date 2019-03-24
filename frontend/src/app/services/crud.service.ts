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

	updateProduct(data){
		return this.http.post(this.url + 'manufacturer/edit', data);
	}

	deleteProduct(id){
		return this.http.get(this.url + 'delete.php?id=' + id);
	}


}