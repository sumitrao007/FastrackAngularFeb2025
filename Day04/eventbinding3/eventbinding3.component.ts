import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component {

  name:string='';

  username:string='';
  password:string='';

  inputText:string='';


  onLogin(){
    if(this.username=="admin" && this.password=="admin"){
      alert("Login Successfully")
    }else{
      alert("Invalid User")
    }
  }

  onChange(){
    console.log("Change Event Occur...")
  }

  onChange1(){
    if(this.inputText.length>6){
      alert("Ur text is exceed limit the charcter for 6 ");
    }
  }


}
