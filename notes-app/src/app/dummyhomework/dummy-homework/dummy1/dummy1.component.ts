import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy1',
  templateUrl: './dummy1.component.html',
  styleUrls: ['./dummy1.component.scss']
})
export class Dummy1Component implements OnInit {

  constructor() { }
  text = 'Make this uppercase.';
  ngOnInit(): void {
  }

}