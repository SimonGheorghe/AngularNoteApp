import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes-app';
  items:string[] = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five"
  ];
}
