import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dummy-component',
  templateUrl: './dummy-component.component.html',
  styleUrls: ['./dummy-component.component.scss']
})
export class DummyComponentComponent implements OnInit {
  id: string;
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
  }

}
