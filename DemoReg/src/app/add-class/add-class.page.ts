import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { dataTeacher } from 'Models/teacher';
import { TeacherPage } from '../teacher/teacher.page';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.page.html',
  styleUrls: ['./add-class.page.scss'],
})
export class AddClassPage implements OnInit {

  
  dataClass: any;

  getid: any;
  teacherbyid: dataTeacher;
  idclass:string;
  Teacherid:any;

  constructor(public callapi: CallApiService,
    public builder: FormBuilder,
    public alertController: AlertController,
    public router: Router,
    public activated: ActivatedRoute,
    private Location: Location) {

      this.getid = activated.snapshot.paramMap.get('id');
      console.log(this.getid);
      // callapi.GetdataTeacherById(this.getid).subscribe(it => {
      //   // console.log(it);
      //   this.teacherbyid = it;
      //   console.log(this.teacherbyid);
  
      //   console.log(this.teacherbyid.idTeacher);
  
      // });
      callapi.GetTeacherById(this.getid).subscribe(it=> {

        this.Teacherid =it;
        console.log(this.Teacherid);
       
    });


    
  }

  ngOnInit() {
    this.getAllClass();
  }


  getAllClass() {
    this.callapi.GetAllClass().subscribe(it => {
      this.dataClass = it;
      console.log(this.dataClass);
    });
  }


  addclass(id) {
   this.idclass = id ;
  console.log(this.idclass);

  this.callapi.AddTeacherToOpenCourse(this.idclass,this.Teacherid).subscribe(it => {
    console.log(it);
    
  });
  

  //   this.callapi.AddTeacherClass(this.teacherbyid.idTeacher,this.data.value).subscribe(it => {
  //     console.log(it);
  //     this.Location.back();



  // });
  }
}
