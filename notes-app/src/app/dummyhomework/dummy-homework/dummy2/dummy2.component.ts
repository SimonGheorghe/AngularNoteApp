import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy2',
  templateUrl: './dummy2.component.html',
  styleUrls: ['./dummy2.component.scss']
})
export class Dummy2Component implements OnInit {
  constructor() { }
  color: string;
  items:string[] = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five"
  ];
  array:number[] = [
    2,5,1,6,9,4
  ];
  ngOnInit(): void {
  }

}
