import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dataTeacher } from 'Models/teacher';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.page.html',
  styleUrls: ['./login-teacher.page.scss'],
})
export class LoginTeacherPage implements OnInit {
  // data:FormGroup;

  datauser: dataTeacher;


  constructor(public router: Router, public builder: FormBuilder) {
    // this.data = this.builder.group({
    //   'username':[null,Validators.required],
    //   'password':[null,Validators.required]
    // });
  }

  ngOnInit() {
  }




  gopage(id) {
    this.router.navigate(['/teacher', { _id: id }])


    // console.log(this.data.value);
    // this.datauser= this.data.value;
    // console.log(this.datauser);

  }


  gopageRegister(){
    this.router.navigate(['/register-teacher'])

  }
}
