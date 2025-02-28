import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {

  name:string='Sumit Raokhande';
  myPlaceholder:string='Enter the Name.......';
  isHidden:boolean=false;

}
