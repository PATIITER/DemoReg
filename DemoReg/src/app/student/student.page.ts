import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dataStudent } from 'Models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  getid: string;
  getstudentByid: dataStudent;

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
  }

}
