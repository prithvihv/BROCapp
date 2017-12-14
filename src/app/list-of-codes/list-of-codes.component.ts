import { Component, OnInit } from '@angular/core';
import { CODE } from './datamodel.CODE';
import { Codes } from '../MOCKDATA'; 
@Component({
  selector: 'app-list-of-codes',
  templateUrl: './list-of-codes.component.html',
  styleUrls: ['./list-of-codes.component.css']
})
export class ListOfCodesComponent implements OnInit {

  NewCodes : CODE[];
  
  constructor() {
    this.NewCodes = Codes;
   }
  ngOnInit() {
   
  }
  AddnewC(no,Sub,TC){
    //this.NewCodes.push({23,Sub,TC})
    this.NewCodes.unshift({ CodeNo: no.value, Subject: Sub.value , TCode :TC.value });
    console.log(this.NewCodes); 
  }

}
