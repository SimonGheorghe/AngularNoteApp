import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2Module } from '../waterfall2/m2/m2.module'

import { C1Component } from '../c1/c1.component'
import { C2Component } from '../c2/c2.component'

@NgModule({
  declarations: [
    C1Component,
    C2Component
  ],
  imports: [
    CommonModule,
    M2Module
  ],
  exports: [
    M2Module,
    C1Component,
    C2Component
  ]
})
export class M1Module { }
