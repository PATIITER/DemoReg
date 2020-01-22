import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddClassStudentPage } from './add-class-student.page';

const routes: Routes = [
  {
    path: '',
    component: AddClassStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddClassStudentPageRoutingModule {}
