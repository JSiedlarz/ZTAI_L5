import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector:'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent implements OnInit {
  @Input() filterText: string;
 // filterText : string;
  items : any;
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(result=>{
      this.items=result;
      console.log(result);
    });
  }

}
