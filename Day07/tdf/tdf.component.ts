import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {


  onSubmit(f:any){
    console.log("Access Username :: "+f.value.myusername);
    console.log("Access Comments :: "+f.value.comment);
  }

}
