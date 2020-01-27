import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddclassStudentPage } from './addclass-student.page';

const routes: Routes = [
  {
    path: '',
    component: AddclassStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddclassStudentPageRoutingModule {}
