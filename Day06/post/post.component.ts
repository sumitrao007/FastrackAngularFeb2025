import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  constructor(private service:HttpService){}
 
  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
    this.service.getPost()
    .subscribe((response:any)=>{
      // console.log(response)
      this.posts=response;
    })
  }

  onSend(inputTitle:string,inputBody:string){
    let jsonObj={
      title:inputTitle,
      body:inputBody
    }

    this.service.postData(jsonObj)
    .subscribe((response)=>{
      console.log(response)
    })
  }


}
