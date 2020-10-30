import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummy2Component } from './dummy2/dummy2.component';
import { AddHyphenPipe } from './add-hyphen.pipe';
import { ChangeColorDirective } from './change-color.directive';



@NgModule({
  declarations: [
    Dummy1Component, 
    Dummy2Component,
    AddHyphenPipe,
    ChangeColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Dummy1Component, 
    Dummy2Component
  ]
})
export class DummyHomeworkModule { }
