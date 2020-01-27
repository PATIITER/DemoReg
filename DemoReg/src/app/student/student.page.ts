import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dataStudent } from 'Models/student';
import { dataTeacher } from 'Models/teacher';
import { dataclass } from 'Models/class';

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

  constructor(public callapi: CallApiService,
    public router: Router,
    public activated: ActivatedRoute) {

    this.getid = activated.snapshot.paramMap.get('_id');
    console.log(this.getid);

    callapi.GetStudentById(this.getid).subscribe(it => {
      this.getstudentByid = it;
      console.log(this.getstudentByid);
      console.log(this.getstudentByid.idStudent);
      
      
      

    });

  }

  ngOnInit() {
    this.callapi.GetAllTeacher().subscribe(it => {
      this.getAllDataTeacher = it
      console.log(it);
      console.log(this.getAllDataTeacher);
      this.dataClass.push(this.getAllDataTeacher);
      console.log(this.dataClass);
      
      
      
      
    });
  }


  GoPageAddClassstudent(id){
    this.router.navigate(['/addclass-student',{id}])


  }

}
