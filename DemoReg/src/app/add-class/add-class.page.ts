import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { dataTeacher } from 'Models/teacher';
import { TeacherPage } from '../teacher/teacher.page';
import { Location } from '@angular/common';
import { dataOpenCourse } from 'Models/openCourse';
import { dataStudent } from 'Models/student';
import { dataclass } from 'Models/class';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.page.html',
  styleUrls: ['./add-class.page.scss'],
})
export class AddClassPage implements OnInit {


  dataClass: dataclass;

  getid: any;
  teacherbyid: dataTeacher;
  idclass: string;
  nameclass: string;
  Teacherid: any;
  dataopencourse: dataOpenCourse;
  data: FormGroup;
  dataStudent: any;
  a: any;
  xxx
  yyy: any;


  constructor(public callapi: CallApiService,
    public builder: FormBuilder,
    public alertController: AlertController,
    public router: Router,
    public activated: ActivatedRoute,
    private Location: Location) {
    this.data = this.builder.group({
      'idCourse': [null, Validators.required],
      'nameCourse': [null, Validators.required],
      'teacher': [[] = [], Validators.required],
      'students': [[] = [], Validators.required]

    });


    this.getid = activated.snapshot.paramMap.get('id');
    console.log(this.getid);
    // callapi.GetdataTeacherById(this.getid).subscribe(it => {
    //   // console.log(it);
    //   this.teacherbyid = it;
    //   console.log(this.teacherbyid);

    //   console.log(this.teacherbyid.idTeacher);

    // });
    callapi.GetTeacherById(this.getid).subscribe(it => {
      console.log(it);

      this.Teacherid = it;
      console.log(this.Teacherid);
      //       this.data.value.teacher.push(this.Teacherid) ; 
      //  console.log(this.data.value.teacher);


    });

    callapi.GetStudentById("555").subscribe(it => {
      console.log(it);

      this.dataStudent = it;
      console.log(this.dataStudent);
      //       this.data.value.teacher.push(this.Teacherid) ; 
      //  console.log(this.data.value.teacher);


    });



  }

  ngOnInit() {
    this.callapi.GetAllClass().subscribe(it => {
      this.dataClass = it;
    })
  }


  getAllClass(i) {
    this.xxx = i;
    for (let index = 0; index < Object.keys(this.dataClass).length; index++) {
      if(this.xxx == this.dataClass[index].idClass){
        this.yyy = this.dataClass[index].nameClass;
        console.log(this.yyy);
        
      }
      
    }



  }
  // yourFunction(id){

  //   var find = this.dataClass.find(it=>it.dataClass.idclass = id);
  //   console.log(find);
  //   //this.a =find;





  //   // this.a = this.dataClass.idclass; 
  //   // console.log(this.a);


  // }


  addclass() {



    console.log(this.data.value.idCourse);

    this.idclass = this.data.value.idCourse;
    // this.nameclass =this.data.value.nameCourse;
    // console.log(this.nameclass);

    console.log(this.idclass);
    // this.data.value.teacher.push(this.Teacherid);
    // this.data.value.students =null;
    console.log(this.data.value.teacher);
    console.log(this.data.value.students);


    this.dataopencourse = this.data.value;



    // this.dataopencourse.idCourse =this.idclass;
    // this.dataopencourse.nameCourse =this.nameclass;



    console.log(this.dataopencourse);


    this.callapi.AddCourse(this.dataopencourse).subscribe(it => {
      console.log(it);

      this.add();
    });





    //   this.callapi.AddTeacherClass(this.teacherbyid.idTeacher,this.data.value).subscribe(it => {
    //     console.log(it);
    //     this.Location.back();



    // });
  }

  add() {
    // this.idclass =this.data.value.idCourse;
    console.log(this.idclass);



    this.callapi.AddTeacherToOpenCourse(this.idclass, this.Teacherid).subscribe(it => {
      console.log(it);

    });
  }
}
