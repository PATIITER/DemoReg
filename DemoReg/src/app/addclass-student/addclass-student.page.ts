import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallApiService } from '../call-api.service';
import { dataTeacher } from 'Models/teacher';

@Component({
  selector: 'app-addclass-student',
  templateUrl: './addclass-student.page.html',
  styleUrls: ['./addclass-student.page.scss'],
})
export class AddclassStudentPage implements OnInit {
  getAllDataTeacher:dataTeacher;
  getid:string;

  constructor(public callapi: CallApiService,
    public router: Router,
    public activated: ActivatedRoute) { 

      this.getid = activated.snapshot.paramMap.get('id');
      console.log(this.getid);
    }

  ngOnInit() {
    this.callapi.GetAllTeacher().subscribe(it => {
      this.getAllDataTeacher = it
      console.log(this.getAllDataTeacher);
      
    });
  }

}
