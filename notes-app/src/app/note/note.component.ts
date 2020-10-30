import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {
  notes: Note[];

  constructor ( private noteService: NoteService ){}
  
  @Input() receivedCategoryId:string;

  setCategoryId(noteId:string, categId:string){
    this.noteService.setCategoryId(noteId, categId).subscribe((notes) => (this.notes = notes));
    this.ngOnChanges();
    this.ngOnChanges();
  }
  
  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => (this.notes = notes));
  }
  
  ngOnChanges(): void {
    if (this.receivedCategoryId) {
      this.noteService.getFilteredNotes(this.receivedCategoryId).subscribe(filteredNotes => this.notes = filteredNotes);
    }
  }

  getColor(index:number):string {
    switch(index%3){
      case 0:
        return 'blue';
      case 1:
        return 'green';
      case 2:
        return 'red';
    }
  }

}
