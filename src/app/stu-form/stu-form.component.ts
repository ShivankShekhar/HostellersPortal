import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-stu-form',
  templateUrl: './stu-form.component.html',
  styleUrls: ['./stu-form.component.scss']
})
export class StuFormComponent implements OnInit {
  userId;
  Hostel;
  roomNo;
  email;
  mobNum;
  startDate=new Date();
  endDate=new Date();
  Loc;
  
  datepickerConfig: Partial<BsDatepickerConfig> ;

  constructor() { 
    var cur_date=new Date(); 
    
    if((cur_date.getMonth() + 4) > 11){ 
      cur_date.setFullYear((cur_date.getFullYear()+1),((cur_date.getMonth() + 4)-12));
    }   
    else
    cur_date.setMonth((cur_date.getMonth() + 4));
    this.datepickerConfig=Object.assign({},
      { 
        containerClass : 'theme-dark-blue', 
        showWeekNumbers:false,
        minDate: new Date(),
        maxDate: cur_date,
        dateInputFormat:'DD/MM/YYYY'
        
      });
  }

  ngOnInit() {
  }

}
