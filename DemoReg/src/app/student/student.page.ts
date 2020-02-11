import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dataStudent } from 'Models/student';
import { dataTeacher } from 'Models/teacher';
import { dataclass } from 'Models/class';
import { dataOpenCourse } from 'Models/openCourse';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  getid: string;
  getstudentByid: dataStudent;
  getAllDataTeacher:dataTeacher;
  dataClass:any[]=[];
  getAllCourse:dataOpenCourse;
  getCourseStudent:dataStudent[]=[];

  constructor(public callapi: CallApiService,
    public router: Router,
    public activated: ActivatedRoute) {

    this.getid = activated.snapshot.paramMap.get('_id');
    console.log(this.getid);

    callapi.GetStudentById(this.getid).subscribe(it => {
      this.getstudentByid = it;
      console.log(this.getstudentByid);
     
      
    });

  }

  ngOnInit() {
    // this.callapi.GetAllTeacher().subscribe(it => {
    //   this.getAllDataTeacher = it
    //   console.log(it);
    //   console.log(this.getAllDataTeacher);
    //   this.dataClass.push(this.getAllDataTeacher);
    //   console.log(this.dataClass);
      
     
        
    //   });
      
       this.callapi.GetOpenCourseAll().subscribe(it =>{
        this.getAllCourse = it 
        console.log(this.getAllCourse);

        console.log(this.getAllCourse[0].students[0].idStudent);
      for (let index = 0; index < Object.keys(this.getAllCourse).length; index++) {
        console.log(this.getAllCourse[index]);
        console.log(this.getAllCourse[index].students);

        for (let i = 0; i < Object.keys(this.getAllCourse[index].students).length; i++) {
         console.log(this.getAllCourse[index].students[i]);

         if (this.getAllCourse[index].students[i].idStudent == this.getstudentByid.idStudent) {
          this.getCourseStudent.push(this.getAllCourse[index]);
           console.log(this.getCourseStudent);
           
         }
        }
        
      }
    });



  }


  GoPageAddClassstudent(id){
    this.router.navigate(['/addclass-student',{ id}])


  }

}
 