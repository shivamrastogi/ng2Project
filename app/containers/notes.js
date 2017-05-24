"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../services/index");
var Notes = (function () {
    function Notes(noteService) {
        var _this = this;
        this.noteService = noteService;
        this.notes = [];
        this.noteService.getNotes()
            .subscribe(function (res) { return _this.notes = res.data; });
    }
    Notes.prototype.onCreateNote = function (note) {
        var _this = this;
        this.noteService.createNote(note)
            .subscribe(function (note) { return _this.notes.push(note); });
    };
    Notes.prototype.onNoteChecked = function (note) {
        var _this = this;
        this.noteService.completeNote(note)
            .subscribe(function (note) {
            var i = _this.notes.findIndex(function (localNote) { return localNote.id === note.id; });
            _this.notes.splice(i, 1);
        });
    };
    return Notes;
}());
Notes = __decorate([
    core_1.Component({
        selector: 'notes-container',
        styles: ["\n    .notes {\n      padding-top: 50px;\n    }\n    .creator {\n      margin-bottom: 40px;\n    }\n  "],
        template: "\n    <div class=\"row center-xs notes\">\n      <div class=\"col-xs-6 creator\">\n        <note-creator (createNote)=\"onCreateNote($event)\"></note-creator>\n      </div>\n      <div class=\"notes col-xs-8\">\n        <div class=\"row between-xs\">\n          <note-card\n            class=\"col-xs-4\"\n            [note]=\"note\"\n            *ngFor=\"let note of notes\"\n            (checked)=\"onNoteChecked($event)\"\n          >\n          </note-card>\n        </div>\n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [index_1.NoteService])
], Notes);
exports.Notes = Notes;
//# sourceMappingURL=notes.js.map