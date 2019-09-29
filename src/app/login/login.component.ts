import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public userId: string = "";
  public pass: string = "";
  router: Router;

  constructor(_router: Router, private http: Http) {
    this.userId = "1501021023";
    this.pass = "123456";
    this.router = _router;
  }

  ngOnInit() {
  }

  login() {

    console.log("entered");
    this.http.get(`http://localhost:8000/stu-login?ID=${this.userId}&Password=${this.pass}`).subscribe((res) => {
      var dat = JSON.stringify(res);
      var data = JSON.parse(dat)._body;
      if (data === 'false') {
        console.log("wrong");
        alert("Invalid Credentials \n Please Try again!");
      }
      else if (data === 'true') {
        console.log("right");
        console.log("User Logged In");
        this.router.navigateByUrl("/Student/Logged");
      }
    });

  }


}
