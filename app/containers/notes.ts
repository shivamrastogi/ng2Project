import { Component } from '@angular/core';
import { NoteService } from '../services/index';

@Component({
  selector: 'notes-container',
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
  `],
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes"
            (checked)="onNoteChecked($event)"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})
export class Notes {
  notes: any[] = []

  constructor(private noteService: NoteService) {
    this.noteService.getNotes()
    .subscribe(res => this.notes = res.data);
  }

  onCreateNote(note: any) {
    this.noteService.createNote(note)
    .subscribe(note => this.notes.push(note));
  }

  onNoteChecked(note: any) {
    this.noteService.completeNote(note)
    .subscribe(note => {
      const i = this.notes.findIndex(localNote => localNote.id === note.id);
      this.notes.splice(i, 1);
    });
  }
}
