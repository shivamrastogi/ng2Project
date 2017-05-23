"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NoteContainer = (function () {
    function NoteContainer() {
        this.notes = [
            { title: 'Cook', value: 'Cook Some Food', color: 'lightblue' },
            { title: 'Study', value: 'Study your subject', color: 'red' },
            { title: 'Repeat', value: 'Repeat the stuff', color: 'green' }
        ];
    }
    NoteContainer.prototype.onNoteChecked = function (index) {
        this.notes.splice(index, 1);
    };
    NoteContainer.prototype.onCreatedNote = function (note) {
        this.notes.push(note);
    };
    return NoteContainer;
}());
NoteContainer = __decorate([
    core_1.Component({
        selector: 'note-container',
        styles: ["\n\t\t.notes {\n\t\t  padding-top: 50px;\n\t\t}\n\t\t.creator {\n\t\t  margin-bottom: 40px; \n\t\t}\n\n\t"],
        template: "\n\t\t<div class=\"row center-xs notes\">\n\t\t  <div class=\"col-xs-6 creator\">\n\t\t    <note-creator (createdNote)=onCreatedNote($event)></note-creator>\n\t\t  </div>\n\t\t  <div class=\"notes col-xs-8\">\n\t\t    <div class=\"row between-xs\">\n\t\t      <note-card\n\t\t        class=\"col-xs-4\"\n\t\t        [note]=\"note\"\n\t\t        *ngFor=\"let note of notes; let i = index\"\n\t\t        (checked) = \"onNoteChecked(i)\" \n\t\t      >\n\t\t      </note-card>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n\t"
    })
], NoteContainer);
exports.NoteContainer = NoteContainer;
//# sourceMappingURL=note-container.js.map