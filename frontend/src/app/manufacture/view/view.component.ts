import { Component, OnInit, ViewChild } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {Router} from "@angular/router";
declare var $;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
	public manufacturers: any = [];

  @ViewChild('manufacturersTable') Table;
  
  public dataTable: any;

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
    this.loadmanufacturers();
  }

  loadmanufacturers(){
    this.crudService.getmanufacturers().subscribe(
      manufacturerData => {
        this.manufacturers = manufacturerData;
        this.dataTable = $(this.Table.nativeElement);
        setTimeout(()=>{this.dataTable.DataTable();}, 1000);
      }
      );
  }

  removeManufacturer(id){
    var data={'m_id': id}; 
    this.crudService.deleteManufacturer(id).subscribe(result => {
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
