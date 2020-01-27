import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddclassStudentPageRoutingModule } from './addclass-student-routing.module';

import { AddclassStudentPage } from './addclass-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddclassStudentPageRoutingModule
  ],
  declarations: [AddclassStudentPage]
})
export class AddclassStudentPageModule {}
