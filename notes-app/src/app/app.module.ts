import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DummyHomeworkModule } from './dummyhomework/dummy-homework/dummy-homework.module';
//import { M1Module } from './waterfall1/m1/m1.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { MatCardModule } from "@angular/material/card";
import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NoteService } from './services/note.service';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FilterService } from './services/filter.service';

const appRoutes: Routes = [
  { path: "dummy-component/:id", component: DummyComponentComponent},
  { path: "add-note", component: AddNoteComponent},
  { path: "", component: HomeComponent },
  { path: '**', redirectTo: '' }
]


@NgModule({
  declarations: [
    AppComponent,
    DummyComponentComponent,
    NoteComponent,
    ToolsComponent,
    FilterComponent,
    AddNoteComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DummyHomeworkModule,
    //M1Module,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [NoteService,
  FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
