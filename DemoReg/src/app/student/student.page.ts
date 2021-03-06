import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dataStudent } from 'Models/student';
import { dataTeacher } from 'Models/teacher';
import { dataclass } from 'Models/class';
import { dataOpenCourse } from 'Models/openCourse';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  getid: string;
  getstudentByid: dataStudent;
  getAllDataTeacher: dataTeacher;
  dataClass: any[] = [];
  getAllCourse: dataOpenCourse;
  getCourseStudent: dataStudent[] = [];
  aaa: any;
  getscore: any[] = [];

  constructor(public callapi: CallApiService,
    public router: Router,
    public activated: ActivatedRoute) {

    this.getid = activated.snapshot.paramMap.get('id');
    console.log(this.getid);

    callapi.GetStudentById(this.getid).subscribe(it => {
      this.getstudentByid = it;
      console.log(this.getstudentByid);


    });

  }

  ngOnInit() {
    // this.callapi.GetAllTeacher().subscribe(it => {
    //   this.getAllDataTeacher = it
    //   console.log(it);
    //   console.log(this.getAllDataTeacher);
    //   this.dataClass.push(this.getAllDataTeacher);
    //   console.log(this.dataClass);



    //   });

    this.callapi.GetOpenCourseAll().subscribe(it => {
      this.getAllCourse = it
      console.log(this.getAllCourse);

      // console.log(this.getAllCourse[0].students[0].idStudent);
      for (let index = 0; index < Object.keys(this.getAllCourse).length; index++) {
        // console.log(this.getAllCourse[index]);
        // console.log(this.getAllCourse[index].students);

        for (let i = 0; i < Object.keys(this.getAllCourse[index].students).length; i++) {
          //  console.log(this.getAllCourse[index].students[i]);

          if (this.getAllCourse[index].students[i].idStudent == this.getstudentByid.idStudent ) {

            // this.aaa = this.getAllCourse[index];
            // console.log(this.aaa.students);

            this.getCourseStudent.push(this.getAllCourse[index]);
            console.log(this.getCourseStudent);






          }
        }

      }
    });




  }


  GoPageAddClassstudent(id) {
    this.router.navigate(['/addclass-student', { id }])


  }
  gopageDetail() {



  }

  presentAlert(id) {
    console.log(id);

    this.callapi.GetOpenCourseAll().subscribe(it => {
      this.getAllCourse = it
      console.log(this.getAllCourse);


      for (let index = 0; index < Object.keys(this.getAllCourse).length; index++) {
        // console.log(this.getAllCourse[index]);
        // console.log(this.getAllCourse[index].students);

        for (let i = 0; i < Object.keys(this.getAllCourse[index].students).length; i++) {
            //console.log(this.getAllCourse[index].nameCourse);

          if (this.getAllCourse[index].students[i].idStudent == this.getstudentByid.idStudent&&this.getAllCourse[index].idCourse == id) {
            console.log(this.getAllCourse[index].students[i]);
            
            this.getscore.push(this.getAllCourse[index].students[i]);
            
            console.log(this.getscore);


            const alert = document.createElement('ion-alert');
            alert.header = this.getAllCourse[index].nameCourse;
            alert.subHeader = 'ชื่อ ' + this.getAllCourse[index].students[i].nameStudent;
            alert.message = '  คะแนนสอบกลางภาค   :' + this.getAllCourse[index].students[i].midScore +'<br>'+
              'คะแนนสอบปลายภาค :' + this.getAllCourse[index].students[i].finalScore +'<br>'+
              ' คะแนนรวม : ' + this.getAllCourse[index].students[i].totalScore+'<br>'+
              '<strong>'+this.getAllCourse[index].students[i].grade ;
            alert.buttons = ['OK'];

            document.body.appendChild(alert);
            return alert.present();
          }

        }

      }



    });


  }

}
