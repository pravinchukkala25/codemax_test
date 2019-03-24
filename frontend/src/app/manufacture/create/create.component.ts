import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CrudService} from "../../services/crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  manufacturerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private router: Router) {
    this.manufacturerForm = this.fb.group({
      m_name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  saveManufacturer(values){
    const manufacturerData = new FormData();
    manufacturerData.append('m_name', values.m_name);
    //console.log(values);
    this.crudService.createManufacturer(manufacturerData).subscribe(result => {
      alert('Data Inserted Successfully...');
      this.router.navigate(['']);

    });
  }
}