import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.page.html',
  styleUrls: ['./add-class.page.scss'],
})
export class AddClassPage implements OnInit {

  data:FormGroup;
  dataClass:any;

  constructor(public callapi:CallApiService,
    public builder:FormBuilder,
    public alertController:AlertController,
    public router : Router) { 
      this.data = this.builder.group({
        'idclass':[null,Validators.required],
        'nameclass':[null,Validators.required]

       
      });
    }

  ngOnInit() {
    this.getAllClass();
  }


  getAllClass() {
    this.callapi.GetAllClass().subscribe(it =>{
      this.dataClass = it;
      console.log(this.dataClass);
    });
  }


  addclass(){
console.log(this.data.value);
console.log(this.dataClass);




  }

}
