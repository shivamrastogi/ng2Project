import { Component,
		 Output,
		 EventEmitter } from '@angular/core';

@Component({
	selector : 'note-creator',
	styles : [`
		.note-creator {
	      padding: 20px;
	      background-color: white;
	      border-radius: 3px;
	    }
	    .title {
	      font-weight: bold;
	      color: rgba(0,0,0,0.8);
	    }
	    .full {
	      height: 100px;
	    }
	`],
	template : `
		<div class="note-creator shadow-2" [ngStyle]="{'background-color' : newNote.color}">
	      <form class="row" (submit)="onCreatedNote()">
	        <input
	          type="text"
	          [(ngModel)]="newNote.title"
	          name="newNoteTitle"
	          placeholder="Title"
	          class="col-xs-10 title"
	          *ngIf="fullForm"
	        >
	        <input
	          type="text"
	          [(ngModel)]="newNote.value"
	          (focus)="toggle(true)"
	          name="newNoteValue"
	          placeholder="Take a note..."
	          class="col-xs-10"
	        >
	        <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
	          <div class="col-xs-3">
	          	<color-picker
	          	[colors]="colors"
	          	(selected)="onColorSelect($event)"></color-picker>
	          </div>
	          <button
	            type="submit"
	            class="btn-light"
	           >
	            Done
	          </button>
	        </div>
	      </form>
	    </div>`
})
export class NoteCreator {
	@Output() createdNote = new EventEmitter();
	colors: string[] = ['#B19CD9', '#FF6961', '#77DD77'];
	newNote = {
		title : '',
		value : '',
		color : 'white'
	}
	fullForm : boolean = false;

	onCreatedNote() {
		const {title, value} = this.newNote;

		if(title && value){
			this.createdNote.next(this.newNote);
		}
		this.reset();
		this.toggle(false);
		
	}

	reset() { 
		this.newNote = {
			title : '',
			value : '',
			color : 'white'
		}
	}

	toggle(value : boolean) {
		this.fullForm = value;
	}

	onColorSelect(color: any){
		this.newNote.color = color;
	}
}