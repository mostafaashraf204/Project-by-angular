import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  mynewsdata:any;
constructor(public news:NewsService){
news.getrealnews().subscribe((r=>this.mynewsdata=r))
}
}
