import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClassStudentPageRoutingModule } from './add-class-student-routing.module';

import { AddClassStudentPage } from './add-class-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddClassStudentPageRoutingModule
  ],
  declarations: [AddClassStudentPage]
})
export class AddClassStudentPageModule {}
