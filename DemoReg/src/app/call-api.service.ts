import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataTeacher } from 'Models/teacher';
import { dataclass } from 'Models/class';
import { dataStudent } from 'Models/student';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  public static host: string = "https://localhost:5001/api/";

  constructor(public Http:HttpClient) { }


  public GetAllTeacher() {
  
    return this.Http.get<dataTeacher>(CallApiService.host + 'Teacher/GetTeacherAll');
  }
  public GetAllClass(){
  
    return this.Http.get<dataclass>(CallApiService.host + 'Class/GetClassAll');
  }
  public GetdataTeacherId(Id:string){
    return this.Http.get<dataTeacher>(CallApiService.host+'Teacher/GetTeacherId/'+ Id);
  }
  public AddNewTeacher(data:dataTeacher){
    console.log(data);
    return this.Http.post<dataTeacher>(CallApiService.host + 'Teacher/AddTeacher/', data );
  }

  public AddTeacherClass(Id:string,data){
    return this.Http.put<dataTeacher>(CallApiService.host+'Teacher/AddTeacherClass/'+ Id,data);
  }
  public GetdataTeacherById(Id:string){
    return this.Http.get<dataTeacher>(CallApiService.host+'Teacher/GetTeacherById/'+ Id);
  }

  //เรียกวิชาในอาจาร
  public GetdataTeacherByClass(Id:string){
    return this.Http.get<dataclass>(CallApiService.host+'Teacher/GetTeacherByclass/'+ Id);
  }

  
  public GetStudentById(Id:string){
    return this.Http.get<dataStudent>(CallApiService.host+'Teacher/GetStudentById/'+ Id);
  }
  
}
