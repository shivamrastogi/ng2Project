import { Component } from '@angular/core';

@Component({
	selector : 'note-container',
	styles : [`
		.notes {
		  padding-top: 50px;
		}
		.creator {
		  margin-bottom: 40px; 
		}

	`],
	template : `
		<div class="row center-xs notes">
		  <div class="col-xs-6 creator">
		    <note-creator></note-creator>
		  </div>
		  <div class="notes col-xs-8">
		    <div class="row between-xs">
		      <note-card
		        class="col-xs-4"
		        [note]="note"
		        *ngFor="let note of notes; let i = index"
		        (checked) = "onNoteChecked(i)" 
		      >
		      </note-card>
		    </div>
		  </div>
		</div>
	`
})

export class NoteContainer {
	

	notes = [
		{title : 'Cook', value : 'Cook Some Food', color : 'lightblue'},
		{title : 'Study', value : 'Study your subject', color : 'red'},
		{title : 'Repeat', value : 'Repeat the stuff', color : 'green'}
	];

	onNoteChecked(index: number) {
		this.notes.splice(index, 1);
	}
}