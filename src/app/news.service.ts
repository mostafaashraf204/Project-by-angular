import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http:HttpClient) { }
  getrealnews(){
    return this.http.get("https://webeetec.com/itsharks24/blog/api/getposts.php")
  }
}
