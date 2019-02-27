import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacLoginComponent } from './fac-login/fac-login.component';
import { FacRegisterComponent } from './fac-register/fac-register.component';
import { FacLogedComponent } from './fac-loged/fac-loged.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from'@angular/forms';
import { HeaderComponent } from './header/header.component';

const routes: Routes=[
  {
    path:'',
    pathMatch: 'full',
    component:FacLoginComponent
  },
  {
    path:'Register',
    component:FacRegisterComponent
  },
  {
    path:'Logged',
    component:FacLogedComponent
  }
];


@NgModule({
  declarations: [FacLoginComponent, FacRegisterComponent, FacLogedComponent,HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FacultyModule { }
