import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { FollowerComponent } from './follower/follower.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"Page1",component:Page1Component
  },
  {
    path:"Page2",component:Page2Component
  },
  {
    path:"Follower",component:FollowerComponent
  },
  {
    path:"**",component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
