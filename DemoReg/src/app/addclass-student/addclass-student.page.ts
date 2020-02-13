import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallApiService } from '../call-api.service';
import { dataTeacher } from 'Models/teacher';
import { dataOpenCourse } from 'Models/openCourse';

import { dataStudent } from 'Models/student';

@Component({
  selector: 'app-addclass-student',
  templateUrl: './addclass-student.page.html',
  styleUrls: ['./addclass-student.page.scss'],
})
export class AddclassStudentPage implements OnInit {
  getAllDataTeacher: dataTeacher;
  getid: string;
  getAllCourse: dataOpenCourse;
  idclass: string;
  getstudentid: dataStudent;
  datastu: any;

  constructor(public callapi: CallApiService,
    public router: Router,
    public activated: ActivatedRoute) {

    this.getid = activated.snapshot.paramMap.get('id');
    console.log(this.getid);
    this.callapi.GetStudentById(this.getid).subscribe(it => {
      this.getstudentid = it;
      console.log(this.getstudentid);


    });
  }

  ngOnInit() {
    // this.callapi.GetAllTeacher().subscribe(it => {
    //   this.getAllDataTeacher = it
    //   console.log(this.getAllDataTeacher);

    // });

    this.callapi.GetOpenCourseAll().subscribe(it => {
      this.getAllCourse = it
      console.log(this.getAllCourse);

    });


  }


  AddCourse(id) {
    this.idclass = id;
    console.log(this.idclass);
    // this.datastu.students[0]= this.getstudentid;
    // console.log(this.datastu.students);

    this.callapi.GetStudentById(this.getid).subscribe(it => {
      this.datastu = it;
      console.log(this.datastu);

      this.callapi.AddStudentToOpenCourse(this.idclass, this.datastu).subscribe(it => {
        console.log(it);

      });
    });




  }


}
