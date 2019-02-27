import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StuRegisterComponent } from './stu-register/stu-register.component';
import { StuFormComponent } from './stu-form/stu-form.component';
import {FormsModule} from'@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { HeaderComponent } from './header/header.component';

const routes: Routes=[
  {
    path:'',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path:'Register',
    component:StuRegisterComponent
  },
  {
    path:'Logged',
    component:StuFormComponent
  }
];

@NgModule({
  declarations: [LoginComponent, StuRegisterComponent, StuFormComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
