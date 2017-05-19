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
var NoteCard = (function () {
    function NoteCard() {
        this.note = {};
        this.checked = new core_1.EventEmitter();
        this.showCheck = false;
        this.onChecked = function () {
            this.checked.next(this.note);
        };
    }
    NoteCard.prototype.toggleCheck = function () {
        this.showCheck = !this.showCheck;
    };
    return NoteCard;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NoteCard.prototype, "note", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteCard.prototype, "checked", void 0);
NoteCard = __decorate([
    core_1.Component({
        selector: 'note-card',
        styles: ["\n\t\t.note-card {\n\t\t  padding: 15px;\n\t\t  border-radius: 2px;\n\t\t  width: 100%;\n\t\t  position: relative;\n\t\t}\n\t\t.title {\n\t\t  font-size: 1.2rem;\n\t\t  font-weight: bold;\n\t\t  text-align: left;\n\t\t  color: rgba(0,0,0,0.8);\n\t\t}\n\t\t.value {\n\t\t  text-align: left;\n\t\t  font-size: 1.4rem;\n\t\t  font-weight: 200;\n\t\t}\n\t\t.icon {\n\t\t  position: absolute;\n\t\t  color: black;\n\t\t  border: 1px solid lightgrey;\n\t\t  background-color: white;\n\t\t  font-size: 30px;\n\t\t  top: -10px;\n\t\t  left: -10px;\n\t\t  width: 40px;\n\t\t  height: 40px;\n\t\t  border-radius: 100%;\n\t\t  cursor: pointer; \n\t\t}\n\t"],
        template: "\n\t\t<div class=\"note-card row shadow-1\"\n\t\t\t(mouseleave)=\"toggleCheck()\"\n\t\t\t(mouseenter)=\"toggleCheck()\" [ngStyle]=\"{'background-color' : note.color}\">\n\t\t  <div\n\t\t   class=\"icon\" \n\t\t   (click)=\"onChecked()\"\n\t\t   *ngIf=\"showCheck\"\n\t\t   >\n\t\t    <i class=\"material-icons\">check</i>\n\t\t  </div>\n\t\t  <div class=\"col-xs-12 title\">\n\t\t    {{ note.title }}\n\t\t  </div>\n\t\t  <div class=\"col-xs-12 value\">\n\t\t    {{ note.value }}\n\t\t  </div>\n\t\t</div>\n\t"
    })
], NoteCard);
exports.NoteCard = NoteCard;
//# sourceMappingURL=note-card.js.map