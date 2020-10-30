import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C4Component } from '../c4/c4.component'
import { C5Component } from '../c5/c5.component'
import { C6Component } from '../c6/c6.component'


@NgModule({
  declarations: [
    C4Component,
    C5Component,
    C6Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    C4Component,
    C5Component,
    C6Component
  ]
})
export class M3Module { }
