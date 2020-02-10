import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataTeacher } from 'Models/teacher';
import { dataclass } from 'Models/class';
import { dataStudent } from 'Models/student';
import { dataOpenCourse } from 'Models/openCourse';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  public static host: string = "https://localhost:5001/api/";

  constructor(public Http: HttpClient) { }


  public GetAllTeacher() {

    return this.Http.get<dataTeacher>(CallApiService.host + 'Teacher/GetTeacherAll');
  }
  public GetAllClass() {

    return this.Http.get<dataclass>(CallApiService.host + 'openCourse/GetClassAll');
  }
  public GetdataTeacherId(Id: string) {
    return this.Http.get<dataTeacher>(CallApiService.host + 'Teacher/GetTeacherId/' + Id);
  }
  public AddNewTeacher(data: dataTeacher) {
    console.log(data);
    return this.Http.post<dataTeacher>(CallApiService.host + 'Teacher/AddTeacher/', data);
  }

  public AddTeacherClass(Id: string, data) {
    return this.Http.put<dataTeacher>(CallApiService.host + 'Teacher/AddTeacherClass/' + Id, data);
  }
  public GetdataTeacherById(Id: string) {
    return this.Http.get<dataTeacher>(CallApiService.host + 'Teacher/GetTeacherById/' + Id);
  }

  //เรียกวิชาในอาจาร
  public GetdataTeacherByClass(Id: string) {
    return this.Http.get<dataclass>(CallApiService.host + 'Teacher/GetTeacherByclass/' + Id);
  }

  public GetStudentById(Id: string) {
    return this.Http.get<dataStudent>(CallApiService.host + 'openCourse/GetStudentId/' + Id);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////



  public GetTeacherById(Id: string) {
    return this.Http.get<dataOpenCourse>(CallApiService.host + 'openCourse/GetTeacherId/' + Id);
  }
  

  public AddTeacherToOpenCourse(Id: string, data) {
    return this.Http.put<dataOpenCourse>(CallApiService.host + 'openCourse/AddTeacherToOpenCourse/' + Id, data);
  }

  public GetOpenCourseAll() {

    return this.Http.get<dataOpenCourse>(CallApiService.host + 'openCourse/GetOpenCourseAll');
  }
  
  public AddStudentToOpenCourse(Id: string, data) {
    return this.Http.put<dataOpenCourse>(CallApiService.host + 'openCourse/AddStudentToOpenCourse/' + Id, data);
  }
  
  public GetOpenCourseById(Id: string) {
    return this.Http.get<dataOpenCourse>(CallApiService.host + 'openCourse/GetOpenCourseById/' + Id);
  }
  
  public AddScoreToStudent(Id: string,ids: string, data) {
    return this.Http.put<dataOpenCourse>(CallApiService.host + 'openCourse/AddScoreToStudent/' + Id+"/"+ids, data);
  }
  public AddNewTeacherinopenCourse(data: dataTeacher) {
    console.log(data);
    return this.Http.post<dataTeacher>(CallApiService.host + 'openCourse/AddNewTeacherinopenCourse/', data);
  }
}
