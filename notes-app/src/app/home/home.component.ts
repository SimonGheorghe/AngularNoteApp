import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  categoryId:string;
  getFilterId(categoryId: string){
    this.categoryId = categoryId;
    console.log(categoryId);
  }
  ngOnInit(): void {
  }

}
