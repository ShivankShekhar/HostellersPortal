import { Component, OnInit } from '@angular/core';  

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  
})
export class FirstComponent implements OnInit {

  constructor() { }

  myStyle: object = {};
  myParams: object = {};
  width: number = 83; 

  ngOnInit() { 
  }
}
