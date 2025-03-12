import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}

  onPage1(){
    this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.router.navigate(['/Page2'])
  }

}
