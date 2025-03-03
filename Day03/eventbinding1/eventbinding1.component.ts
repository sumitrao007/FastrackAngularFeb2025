import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {

  count:number=0;
  onClick(){
    console.log("Click event Occur...")
  }

  onIncrement(){
    this.count++;
  }
  onDecrement(){
    this.count--;
  }

  onImageClick(){
    console.log("On Image Click Occur...")
  }

  onSend(myinput:any){
    console.log(myinput);
    console.log("Data is ",myinput.value);
    myinput.style.background='green';
    myinput.style.color='white'
  }

  onSend1(myvalue:string){
    console.log(myvalue)
  }

}
