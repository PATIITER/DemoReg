import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.page.html',
  styleUrls: ['./register-teacher.page.scss'],
})
export class RegisterTeacherPage implements OnInit {

  data: FormGroup;

  constructor(
    public router: Router,
    public builder: FormBuilder) {

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

    
  }
}
