import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterStudentPageRoutingModule } from './register-student-routing.module';

import { RegisterStudentPage } from './register-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterStudentPageRoutingModule
  ],
  declarations: [RegisterStudentPage]
})
export class RegisterStudentPageModule {}
