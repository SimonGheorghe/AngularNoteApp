import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  title:string = "Add note";
  titleColor = "red";
  noteContent = "note";
  backgroundColor = "";
  color:string;
  setTitle() { this.title = "test"; }
  setBackgroundColor() { this.backgroundColor = this.color; }
  constructor() { }

  ngOnInit(): void {
  }

}
