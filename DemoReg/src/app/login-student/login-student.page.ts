import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dataStudent } from 'Models/student';
import { CallApiService } from '../call-api.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.page.html',
  styleUrls: ['./login-student.page.scss'],
})
export class LoginStudentPage implements OnInit {

  data:FormGroup;
  datauser: dataStudent;

  dataStudent:dataStudent;
  getStudent:dataStudent[]=[];


  constructor(public router: Router,
     public builder: FormBuilder,
     public callapi:CallApiService) {

      this.data = this.builder.group({
        'username':[null,Validators.required],
        'password':[null,Validators.required]
      });
      }

  ngOnInit() {
  }



  gopage(id) {
   // this.router.navigate(['/student', { _id: id }])
   console.log(this.data.value);
   this.datauser= this.data.value;
   console.log(this.datauser);
   console.log(this.datauser.username);
   console.log(this.datauser.password);

   this.callapi.GetAllStudent().subscribe(it=>{
     console.log(it);
     this.dataStudent =it;
         console.log(this.dataStudent);
 // console.log(this.dataTeacher.username);
 //   console.log(this.dataTeacher.password);

   for (let index = 0; index < Object.keys(this.dataStudent).length; index++) {
     console.log(this.dataStudent[index].username);
     console.log(this.dataStudent[index].password);


     // for (let i = 0; i < Object.keys(this.dataTeacher[index]).length; i++) {
     //  console.log(this.dataTeacher[index].teacher[i]);
      

       // if (this.dataTeacher[index].username[index] == this.datauser.username) {
       //   console.log(this.dataTeacher[index]);

         if (this.dataStudent[index].username == this.datauser.username && this.dataStudent[index].password == this.datauser.password) {
         console.log(this.dataStudent[index]);
         

       this.getStudent.push(this.dataStudent[index]);
        console.log(this.getStudent);
            this.router.navigate(['/student', {id:this.dataStudent[index].idStudent}])

       
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
    this.router.navigate(['/register-student'])

  }
}
