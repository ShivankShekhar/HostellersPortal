import { Component, OnInit } from '@angular/core';  
import {Router} from '@angular/router';

@Component({
  selector: 'app-stu-register',
  templateUrl: './stu-register.component.html',
  styleUrls: ['./stu-register.component.scss'] 
})
 
 

export class StuRegisterComponent implements OnInit {
  userId;
  hostel;
  roomNo;
  email;
  mobNum;
  fname;
  fMobNum;
  pass;
  confPass;
  fEmail;
  router: Router;
  constructor( _router: Router ) { this.router = _router; }

  ngOnInit() {
  }
 

  result=1;
send(){
  var data = {
    StudentID : this.userId,
    Hostel:this.hostel,
    RoomNo:this.roomNo,
    EmailID:this.email,
    MobileNo:this.mobNum,
    FatherName:this.fname,
    FatherMobileNo:this.fMobNum,
    FatherEmail:this.fEmail,
    Password:this.pass,
    RegisteredByWarden:false
  };

  var http = new XMLHttpRequest();
  http.open("POST","http://localhost:8000/register",true);
  http.setRequestHeader("Content-Type","application/json");
  http.send(JSON.stringify(data));
  this.router.navigateByUrl('Student');
}
 
   
  
}
