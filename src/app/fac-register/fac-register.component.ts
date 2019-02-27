import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fac-register',
  templateUrl: './fac-register.component.html',
  styleUrls: ['./fac-register.component.scss']
})
export class FacRegisterComponent implements OnInit {
  facId;
  hostel; 
  email;
  mobNum;
  name;
  dept;
  pass;
  confPass;
  
  router: Router;
  constructor( _router: Router ) { this.router = _router; }

  ngOnInit() {
  }

 fac_send(){
    var data = {
      FacultyID : this.facId,
      Hostel:this.hostel, 
      EmailID:this.email,
      MobileNo:this.mobNum,
      Name:this.name,
      Department:this.dept, 
      Password:this.pass, 
    };
  
    var http = new XMLHttpRequest();
    http.open("POST","http://localhost:8000/fac-register",true);
    http.setRequestHeader("Content-Type","application/json");
    http.send(JSON.stringify(data));
    this.router.navigateByUrl('Faculty');
  }
}