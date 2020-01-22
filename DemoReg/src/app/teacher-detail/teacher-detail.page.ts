import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallApiService } from '../call-api.service';
import { dataTeacher } from 'Models/teacher';
import { dataclass } from 'Models/class';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.page.html',
  styleUrls: ['./teacher-detail.page.scss'],
})
export class TeacherDetailPage implements OnInit {

  getid: string;
  classbyid:dataclass;
  constructor(public callapi: CallApiService,
    public router: Router,
    public activated: ActivatedRoute) {


      this.getid = activated.snapshot.paramMap.get('_id');
      console.log(this.getid);
      callapi.GetdataTeacherByClass(this.getid).subscribe(it => {
        // console.log(it);
        this.classbyid = it;
        console.log(this.classbyid);
        console.log(this.classbyid.students);

  
      
        
  
      });


     }

  ngOnInit() {



  }

}
