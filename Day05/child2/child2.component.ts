import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  strData:string="Hopes so U r Understanding Angular 16 concept";
  jsonObj={
    id:9,
    fname:"Sumit",
    role:"Developer"
  }

  @Output() ChildStrEvent=new EventEmitter();

  @Output() childJsonData=new EventEmitter();


  onSend(){
    this.ChildStrEvent.emit(this.strData);
    this.childJsonData.emit(this.jsonObj);
  }


}
