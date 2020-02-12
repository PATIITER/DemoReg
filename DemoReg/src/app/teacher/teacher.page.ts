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
  t: any;
  Teacherid: any;
  getAllCourse: dataOpenCourse;
  getCourseTeacher:dataOpenCourse[] = [];
  A: any[];
  c: any;

  xxx:dataTeacher;

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

    callapi.GetTeacherById(this.getid).subscribe(it => {

      this.Teacherid = it;
      console.log(this.Teacherid);




    });
  }

  ngOnInit() {
    this.callapi.GetOpenCourseAll().subscribe(it => {
      console.log(it);

      // for (let index = 0; index < Object.keys(it).length; index++) {
      //   this.xxx = it[index];
      //   console.log(this.xxx);
      
        
      // }
        this.getAllCourse = it;

        console.log(this.getAllCourse[0].teacher[0].idTeacher);
      for (let index = 0; index < Object.keys(this.getAllCourse).length; index++) {
        console.log(this.getAllCourse[index]);
        console.log(this.getAllCourse[index].teacher);
        for (let i = 0; i < Object.keys(this.getAllCourse[index].teacher).length; i++) {
         console.log(this.getAllCourse[index].teacher[i]);
         if (this.getAllCourse[index].teacher[i].idTeacher == this.Teacherid.idTeacher) {
          this.getCourseTeacher.push(this.getAllCourse[index]);
           console.log(this.getCourseTeacher);
           
         }
        }
        
      }
        // this.xxx = this.getAllCourse.teacher.find(it => it.idTeacher == this.getid);
        // console.log(this.xxx);
      

 
      


    });

    // this.callapi.GetOpenCourseById("002").subscribe(it => {
    //   console.log(it);
      
    // });



  }

  //   getfiller(){

  //     // const inventory = [
  //     //   {name: 'apples', quantity: 2},
  //     //   {name: 'bananas', quantity: 0},
  //     //   {name: 'cherries', quantity: 5}
  //     // ];

  //     // const result = inventory.find( ({ name }) => name === 'cherries' );

  //     // console.log(result) // { name: 'cherries', quantity: 5 }

  //     this.callapi.GetOpenCourseAll().subscribe(it =>{
  //       this.getAllCourse = it 
  //       console.log(this.getAllCourse);
  //       console.log(this.getAllCourse.Teacher);

  //     for(let index = 0; index < Object.keys(this.getAllCourse).length; index++){

  //     }

  //     this.c =this.getAllCourse.Teacher.filter(it => it.idTeacher == "555");

  //     console.log(this.c);

  // });




  //     // this.c =this.getAllCourse.Teacher.find( ({idTeacher}) => idTeacher === '2');

  //     // console.log(this.c);


  //     //this.c



  //     // let aa = this.getAllCourse.Teacher;
  //     // let ee = aa.find(aa=this.Teacherid.idTeacher);
  //     // console.log(ee);

  //   }

  gopageDetail(id) {

    this.router.navigate(['/teacher-detail', { id }])

  }

  GoPageAddClass(_id) {

    this.router.navigate(['/add-class', { _id: this.Teacherid.username }])
  }
}
