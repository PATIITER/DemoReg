import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dataTeacher } from 'Models/teacher';

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

  constructor(public callapi: CallApiService,
    public router: Router,
    public activated: ActivatedRoute) {

    this.getid = activated.snapshot.paramMap.get('_id');
    console.log(this.getid);
    callapi.GetdataTeacherId(this.getid).subscribe(it => {
      // console.log(it);
      this.teacherbyid = it;
      console.log(this.teacherbyid);

      console.log(this.teacherbyid.class);
      console.log(this.teacherbyid.idTeacher);
      
      

    });
  }

  ngOnInit() {
    


  }

  gopageDetail(id){

    this.router.navigate(['/teacher-detail',{_id:id}])


  }


  GoPageAddClass(idTeacher) {

    this.router.navigate(['/add-class',{_id:idTeacher}])
  }
}
