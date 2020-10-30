import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from "../category";
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})


export class FilterComponent implements OnInit {

  constructor ( private filterService: FilterService ){}
  categories:Category[] ;

  @Output() filterEmitter = new EventEmitter<string>();
  
  sendFilterId(categoryId:string)
  {
    this.filterEmitter.emit(categoryId);
  }
  ngOnInit(): void {
    this.categories = this.filterService.getFilters();
  }

}
