import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallApiService } from '../call-api.service';
import { dataTeacher } from 'Models/teacher';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.page.html',
  styleUrls: ['./register-teacher.page.scss'],
})
export class RegisterTeacherPage implements OnInit {

  data: FormGroup;
  dataTeacher:dataTeacher;

  constructor(
    public router: Router,
    public builder: FormBuilder,
    public callapi:CallApiService,
    private Location: Location) {

    this.data = this.builder.group({
      'idTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {
  }


  register(){ 
    
    this.dataTeacher = this.data.value ;
    console.log(this.dataTeacher);
   
    
    
    this.callapi.AddNewTeacherinopenCourse(this.dataTeacher).subscribe(it => {
      console.log(it);
      

    });
    this.Location.back();

    
  }
}
