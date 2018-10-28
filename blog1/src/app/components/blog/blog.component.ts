import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


items = [
{
image: "aaaa",
text: "jjj"
},{
image: "aaaa",
text: "jjj"
},{
image: "aaaa",
text: "jjj"
},{
image: "aaaa",
text: "jjj"
},{
image: "aaaa",
text: "jjj"
},{
image: "aaaa",
text: "jjj"
},{
image: "aaaa",
text: "jjj"
},{
image: "aaaa",
text: "jjj"
},]

  constructor() { }

  ngOnInit() {
  }

}
