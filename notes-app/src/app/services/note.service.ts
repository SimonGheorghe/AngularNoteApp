import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  // notess:Note[] = [
  //   {
  //     id: "Id1",
  //     title: "First note",
  //     text: "This is the description for the first note",
  //     category:"1",
  //     color: "",
  //     ownerId: "",
  //     textColor: "",
  //     pinned: true
  //   },
  //   {
  //     id: "Id2",
  //     title: "Second note",
  //     text: "This is the description for the second note",
  //     category:"2",
  //     color: "",
  //     ownerId: "",
  //     textColor: "",
  //     pinned: true
  //   }
  // ];
  notes: Note[];
  readonly baseUrl = "https://dev-notesapi.mepdevelopment.com/api";
  ownerId = "00000000-0000-0000-0000-000000000008";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  serviceCall() {
    console.log("Note service was called");
  }

  getFilteredNotes(categId: string): Observable<Note[]> {
    return this.httpClient
      .get<Note[]>(
        this.baseUrl + `/notes/owner/${this.ownerId}/category/${categId}`,
        this.httpOptions
      );
  }

  getNotes() {

    var notes2 = this.httpClient.get<Note[]>(
      this.baseUrl + `/notes/owner/${this.ownerId}`,
      this.httpOptions
    );
    this.updateNotes(notes2);
    //notes2.subscribe((note) => (this.notes = note));
    return notes2;
  }

  setCategoryId(noteId: string, categId: string) {
    var objIndex = this.notes.findIndex((note => note.id === noteId));
    this.notes[objIndex].category = categId;
    var notes2 = this.httpClient.put<Note[]>(
      this.baseUrl + `/Notes/${noteId}`,
      this.notes[objIndex],
      this.httpOptions
    );
    return notes2;
  }
  //this.updateNotes(notes2); ??? why it isn't working after this
  updateNotes(notes2: Observable<Note[]>) {
    notes2.subscribe(notes => this.notes = notes);
  }
  addNote(noteTitle: string, noteDescription: string, noteCategoryId: string) {
    let note = {
      text: noteDescription,
      title: noteTitle,
      category: noteCategoryId,
      ownerId: this.ownerId,
    };
    return this.httpClient.post(this.baseUrl + "/notes", note, this.httpOptions).subscribe();
  }
}
