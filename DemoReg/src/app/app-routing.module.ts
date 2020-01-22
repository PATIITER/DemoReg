import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-teacher', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login-teacher',
    loadChildren: () => import('./login-teacher/login-teacher.module').then( m => m.LoginTeacherPageModule)
  },
  {
    path: 'login-student',
    loadChildren: () => import('./login-student/login-student.module').then( m => m.LoginStudentPageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherPageModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'add-class',
    loadChildren: () => import('./add-class/add-class.module').then( m => m.AddClassPageModule)
  },
  {
    path: 'add-class-student',
    loadChildren: () => import('./add-class-student/add-class-student.module').then( m => m.AddClassStudentPageModule)
  },
  {
    path: 'register-teacher',
    loadChildren: () => import('./register-teacher/register-teacher.module').then( m => m.RegisterTeacherPageModule)
  },
  {
    path: 'register-student',
    loadChildren: () => import('./register-student/register-student.module').then( m => m.RegisterStudentPageModule)
  },
  {
    path: 'teacher-detail',
    loadChildren: () => import('./teacher-detail/teacher-detail.module').then( m => m.TeacherDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
