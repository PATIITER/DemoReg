import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallApiService } from '../call-api.service';
import { dataTeacher } from 'Models/teacher';
import { dataclass } from 'Models/class';
import { dataOpenCourse } from 'Models/openCourse';
import { dataStudent } from 'Models/student';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.page.html',
  styleUrls: ['./teacher-detail.page.scss'],
})
export class TeacherDetailPage implements OnInit {

  getid: string;
  idstu:any;
  classbyid: dataOpenCourse;
  score: any[] = [];
  grade: string[] = [];
  midScore: any[] = [];
  finalScore: any[] = [];
  total: any[] = [];
  dataStu:dataStudent;
  dataOpencourse = {
    'IdCourse': null,
    'NameCourse': null,
    'Teacher': [],
    'Students': []
  };

  data = {
    'idStudent':null,
    'nameStudent':null,
    'score':null,
    'midScore':null,
    'finalScore':null,
    'totalScore':null,
    'username':null,
    'password':null,

  };
  xxx: number;
  constructor(public callapi: CallApiService,
    public router: Router,
    public activated: ActivatedRoute) {


    this.getid = activated.snapshot.paramMap.get('id');
    console.log(this.getid);
    callapi.GetOpenCourseById(this.getid).subscribe(it => {
      // console.log(it);
      this.classbyid = it;
      console.log(this.classbyid);

    });

  }

  ngOnInit() {

  }

  datalog() {

    console.log();
    for (let i = 0; i < this.score.length; i++) {
      this.total[i] = parseInt(this.score[i]) + parseInt(this.midScore[i]) + parseInt(this.finalScore[i]);
      this.xxx = this.total[i];
      this.data.totalScore = this.xxx;
      this.data.score = this.score[i];
      this.data.midScore =this.midScore[i];
      this.data.finalScore = this.finalScore[i];
      console.log(this.data);

    }
    this.cal(this.total);
this.dataStu = this.data ;
console.log(this.dataStu);


    // this.dataOpencourse.Students.push(this.data);
    // console.log(this.dataOpencourse);



  }

  cal(total) {
    this.total = total;
    for (var i in total) {
      this.grade[i] = this.total[i];
      console.log(this.total);

      if (this.total[i] >= 80) {
        this.grade[i] = this.total[i];
        this.grade[i] = "A";
      } else if (this.total[i] >= 70) {
        this.grade[i] = this.total[i];
        this.grade[i] = "B";
      } else if (this.total[i] >= 60) {
        this.grade[i] = this.total[i];
        this.grade[i] = "C";
      } else if (this.total[i] >= 50) {
        this.grade[i] = this.total[i];
        this.grade[i] = "D";
      } else {
        this.grade[i] = "F";
      }

    }

  }

  adddata(id){
    this.idstu =id ;
    console.log(this.idstu);
    
console.log(this.getid);

    this.callapi.AddScoreToStudent(this.getid,this.idstu,this.dataStu).subscribe(it => {
      console.log(it);

    });




  }


}
