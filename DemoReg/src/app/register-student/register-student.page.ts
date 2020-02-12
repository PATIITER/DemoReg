import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallApiService } from '../call-api.service';

import {Location} from '@angular/common';
import { dataStudent } from 'Models/student';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.page.html',
  styleUrls: ['./register-student.page.scss'],
})
export class RegisterStudentPage implements OnInit {

  data: FormGroup;
  dataStudent:dataStudent;

  constructor(
    public router: Router,
    public builder: FormBuilder,
    public callapi:CallApiService,
    private Location: Location) {

    this.data = this.builder.group({
      'idStudent': [null, Validators.required],
      'nameStudent': [null, Validators.required],
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {
  }


  register(){ 
    
    this.dataStudent = this.data.value ;
    console.log(this.dataStudent);
   
    
    
    this.callapi.AddNewStudentinopenCourse(this.dataStudent).subscribe(it => {
      console.log(it);
      

    });
    this.Location.back();

    
  }
}
