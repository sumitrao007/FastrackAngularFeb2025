import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }


  getPost(){
    return this.http.get(this.url)
  }


  postData(obj:any){
    return this.http.post(this.url,obj);
  }

  updateData(obj:any){
    return (this.http.put(`${this.url}/${obj.id}`,obj));

  }

  deleteData(id:any){
    // return this.http.delete(`${this.url}/${id}`);
    return this.http.delete(this.url+"/"+id);
  }

}
