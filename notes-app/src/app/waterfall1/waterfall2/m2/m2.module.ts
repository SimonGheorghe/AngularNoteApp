import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M3Module } from '../waterfall3/m3/m3.module'

import { C3Component } from '../c3/c3.component'

@NgModule({
  declarations: [
    C3Component
  ],
  imports: [
    CommonModule,
    M3Module
  ],
  exports:[
    C3Component,
    M3Module
  ]
})
export class M2Module { }
