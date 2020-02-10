import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dataTeacher } from 'Models/teacher';
import { dataOpenCourse } from 'Models/openCourse';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

  dataTeacher: dataTeacher;
  getid: string;
  teacherbyid: dataTeacher;
t:any;
Teacherid:any;
getAllCourse:dataOpenCourse;
A:any;

  constructor(public callapi: CallApiService,
    public router: Router,
    public activated: ActivatedRoute) {

    this.getid = activated.snapshot.paramMap.get('_id');
    console.log(this.getid);
    // callapi.GetdataTeacherId(this.getid).subscribe(it => {
    //    console.log(it);
    //   this.teacherbyid = it;
    //   console.log(this.teacherbyid);

     
    //   });

       callapi.GetTeacherById(this.getid).subscribe(it=> {

        this.Teacherid =it;
        console.log(this.Teacherid);
       
    });
  }

  ngOnInit() {
    this.callapi.GetOpenCourseAll().subscribe(it =>{
      this.getAllCourse = it 
      console.log(this.getAllCourse);
       
    });

  }

  gopageDetail(id){

    this.router.navigate(['/teacher-detail',{id}])

  }

  GoPageAddClass(idTeacher) {

    this.router.navigate(['/add-class',{_id:idTeacher}])
  }
}
