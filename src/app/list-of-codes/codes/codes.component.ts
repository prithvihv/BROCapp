import { Component, OnInit ,Input} from '@angular/core';
import { CODE } from '../datamodel.CODE';
@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent implements OnInit {
@Input() NewCode : CODE;
  
  constructor() { }

  ngOnInit() {
      console.log(this.NewCode);
  }

}
