import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dataTeacher } from 'Models/teacher';
import { CallApiService } from '../call-api.service';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.page.html',
  styleUrls: ['./login-teacher.page.scss'],
})
export class LoginTeacherPage implements OnInit {
  data:FormGroup;

  datauser: dataTeacher;

  dataTeacher:dataTeacher;
  getTeacher:dataTeacher[]=[];


  constructor(public router: Router, 
    public builder: FormBuilder,
    public callapi: CallApiService) {
    this.data = this.builder.group({
      'username':[null,Validators.required],
      'password':[null,Validators.required]
    });
  }

  ngOnInit() {
  }




  gopage(id) {
    //this.router.navigate(['/teacher', { _id: id }])


    console.log(this.data.value);
    this.datauser= this.data.value;
    console.log(this.datauser);
    console.log(this.datauser.username);
    console.log(this.datauser.password);

    this.callapi.GetAllTeacher().subscribe(it=>{
      console.log(it);
      this.dataTeacher =it;
          console.log(this.dataTeacher);
  // console.log(this.dataTeacher.username);
  //   console.log(this.dataTeacher.password);

    for (let index = 0; index < Object.keys(this.dataTeacher).length; index++) {
      console.log(this.dataTeacher[index].username);
      console.log(this.dataTeacher[index].password);


      // for (let i = 0; i < Object.keys(this.dataTeacher[index]).length; i++) {
      //  console.log(this.dataTeacher[index].teacher[i]);
       

        // if (this.dataTeacher[index].username[index] == this.datauser.username) {
        //   console.log(this.dataTeacher[index]);

          if (this.dataTeacher[index].username == this.datauser.username && this.dataTeacher[index].password == this.datauser.password) {
          console.log(this.dataTeacher[index]);
          

        this.getTeacher.push(this.dataTeacher[index]);
         console.log(this.getTeacher);
             this.router.navigate(['/teacher', {id:this.dataTeacher[index].idTeacher}])

        
      }else{

        console.log("eiei");
        
      }

      // for (let i = 0; i < Object.keys(this.getAllCourse[index].teacher).length; i++) {
      //  console.log(this.getAllCourse[index].teacher[i]);
       
      //  if (this.getAllCourse[index].teacher[i].idTeacher == this.Teacherid.idTeacher) {
      //   this.getCourseTeacher.push(this.getAllCourse[index]);
      //    console.log(this.getCourseTeacher);
         
      //  }
      // }
      
    }






    });
    
  
  }


  gopageRegister(){
    this.router.navigate(['/register-teacher'])

  }
}
