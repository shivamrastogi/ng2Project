"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NoteCreator = (function () {
    function NoteCreator() {
        this.newNote = {
            title: '',
            value: ''
        };
    }
    return NoteCreator;
}());
NoteCreator = __decorate([
    core_1.Component({
        selector: 'note-creator',
        styles: ["\n\t\t.note-creator {\n\t      padding: 20px;\n\t      background-color: white;\n\t      border-radius: 3px;\n\t    }\n\t    .title {\n\t      font-weight: bold;\n\t      color: rgba(0,0,0,0.8);\n\t    }\n\t    .full {\n\t      height: 100px;\n\t    }\n\t"],
        template: "\n\t\t<div class=\"note-creator shadow-2\">\n\t      <form class=\"row\">\n\t        <input\n\t          type=\"text\"\n\t          [(ngModel)]=\"newNote.title\"\n\t          name=\"newNoteTitle\"\n\t          placeholder=\"Title\"\n\t          class=\"col-xs-10 title\"\n\t        >\n\t        <input\n\t          type=\"text\"\n\t          [(ngModel)]=\"newNote.value\"\n\t          name=\"newNoteValue\"\n\t          placeholder=\"Take a note...\"\n\t          class=\"col-xs-10\"\n\t        >\n\t        <div class=\"actions col-xs-12 row between-xs\">\n\t          <button\n\t            type=\"submit\"\n\t            class=\"btn-light\"\n\t           >\n\t            Done\n\t          </button>\n\t        </div>\n\t      </form>\n\t    </div>\n\n\t    <span>{{newNote | json}}</span>\n\t"
    })
], NoteCreator);
exports.NoteCreator = NoteCreator;
//# sourceMappingURL=note-creator.js.map