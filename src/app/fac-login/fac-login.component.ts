import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fac-login',
  templateUrl: './fac-login.component.html',
  styleUrls: ['./fac-login.component.scss']
})
export class FacLoginComponent implements OnInit {
  public userId:string="";
  public pass:string=""; 
  router: Router;


  constructor(_router: Router) { 
    this.userId="";
    this.pass="";
    this.router = _router;
  }
  
  ngOnInit() {
  }

  
login(){

  var data={
    ID:this.userId,
    Password:this.pass
  };

  var http = new XMLHttpRequest();
  http.open("POST","http://localhost:8000/fac-login",true);
  http.setRequestHeader("Content-Type","application/json");
  http.onreadystatechange = function(){
    if(http.readyState===4)
      if(this.responseText==='false')
      alert("Invalid Credentials \n Please Try again!");
      else
      console.log("User Logged In");
  };
  http.send(JSON.stringify(data));
 
  } 

  mov(){this.router.navigateByUrl('Faculty/Logged');}

}
