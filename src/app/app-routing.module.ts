import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path:'',
    component: FirstComponent
  },
  {
    path:'Student',
    loadChildren: './student.module#StudentModule'
  },
  {
    path:'Faculty',
    loadChildren: './faculty.module#FacultyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
