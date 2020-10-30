import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { FilterService } from '../services/filter.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  noteTitle:string;
  noteDescription:string;
  categories: Category[];
  idCategoryNote: string;

  constructor(
    private filterService: FilterService, 
    private noteService: NoteService
    ) {}

  ngOnInit(): void {
    this.categories = this.filterService.getFilters();
  }
  addNote(){
    this.noteService.addNote(this.noteTitle, this.noteDescription, this.idCategoryNote);
  }
}
