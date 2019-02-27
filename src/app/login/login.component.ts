import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as angula from "angular";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
  http.open("POST","http://localhost:8000/stu-login",true);
  http.setRequestHeader("Content-Type","application/json");
  http.send(JSON.stringify(data));
        http.onreadystatechange = function(){
          if(http.readyState===4)
          {
            if(this.responseText==='false')
            { 
              alert("Invalid Credentials \n Please Try again!");  
            }
            else
            { 
              console.log("User Logged In"); document.getElementById("res").innerHTML = this.responseText;
            }
          }
            };
    console.log(http.status); 
    
  }  

// click(){
  
//   var app=angular.module('myApp',[]);
//   app.controller('myCtrl',function($scope,$http)
//   {
//     $scope.submit=function(){
//         var data=$.param({
//         dat: JSON.stringify({
//             ID:$scope.userId,
//             Password:$scope.pass
//           }) 
//       });
    
//       $http.POST("http://localhost:8000/stu-login",data).success(function(data,status){ 
//         console.log("data posted");
//       });
//     }
//   });
//   }

   mov(){
    this.login(); 
    //this.click();
    //  if( x) this.router.navigateByUrl('Student/Logged');
    }
}
