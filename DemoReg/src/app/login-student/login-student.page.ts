import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.page.html',
  styleUrls: ['./login-student.page.scss'],
})
export class LoginStudentPage implements OnInit {

  constructor(public router: Router,
     public builder: FormBuilder) { }

  ngOnInit() {
  }



  gopage(id) {
    this.router.navigate(['/student', { _id: id }])

  }

  gopageRegister(){
    this.router.navigate(['/register-student'])

  }
}
