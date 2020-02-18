import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginTeacherPageRoutingModule } from './login-teacher-routing.module';

import { LoginTeacherPage } from './login-teacher.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FontAwesomeModule,
    LoginTeacherPageRoutingModule
  ],
  declarations: [LoginTeacherPage]
})
export class LoginTeacherPageModule {}
