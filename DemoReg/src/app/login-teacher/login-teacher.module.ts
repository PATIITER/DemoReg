import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginTeacherPageRoutingModule } from './login-teacher-routing.module';

import { LoginTeacherPage } from './login-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginTeacherPageRoutingModule
  ],
  declarations: [LoginTeacherPage]
})
export class LoginTeacherPageModule {}
