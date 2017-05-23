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
var ColorPicker = (function () {
    function ColorPicker() {
        this.colors = [];
        this.selected = new core_1.EventEmitter();
        this.isSelectorVisible = false;
    }
    ColorPicker.prototype.showSelector = function (value) {
        this.isSelectorVisible = value;
    };
    ColorPicker.prototype.selectColor = function (color) {
        this.selected.next(color);
        this.showSelector(false);
    };
    return ColorPicker;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ColorPicker.prototype, "colors", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ColorPicker.prototype, "selected", void 0);
ColorPicker = __decorate([
    core_1.Component({
        selector: 'color-picker',
        styles: ["\n\t\t.color-selector {\n\t      position: relative;\n\t    }\n\t    .selector {\n\t      min-width: 120px;\n\t      border: 1px solid lightgrey;\n\t      padding: 10px;\n\t      background-color: #efefef;\n\t      position: absolute;\n\t      top: -50px;\n\t      left: 0;\n\t    }\n\t    .color {\n\t      height: 30px;\n\t      width: 30px;\n\t      border-radius: 100%;\n\t      cursor: pointer;\n\t      margin-right: 10px;\n\t      margin-bottom: 10px;\n\t    }\n\t    .color:hover {\n\t      border: 2px solid darkgrey;\n\t    }\n\t    .icon {\n\t      font-size: 1.4rem;\n\t      color: grey;\n\t      cursor: pointer;\n\t    }\n\t"],
        template: "<div class=\"color-selector\">\n\t\t  <i (click) = showSelector(true) class=\"material-icons icon\">color_lens</i>\n\t\t  <div class=\"selector row center-xs\" *ngIf=\"isSelectorVisible\">\n\t\t    <div class=\"color\" *ngFor=\"let color of colors\" (click)=\"selectColor(color)\" [ngStyle]=\"{'background-color' : color}\"></div>\n\t\t  </div>\n\t\t</div>"
    })
], ColorPicker);
exports.ColorPicker = ColorPicker;
//# sourceMappingURL=color-picker.js.map