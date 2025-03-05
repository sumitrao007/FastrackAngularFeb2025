import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  strData:string='U r Learning Angular 16 Module from Sumit';
  jsonObj={
    id:9,
    fname:"Sumit",
    lname:"Raokhande"
  }

}
