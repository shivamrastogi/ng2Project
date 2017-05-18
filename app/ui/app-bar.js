"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppBar = (function () {
    function AppBar() {
    }
    return AppBar;
}());
AppBar = __decorate([
    core_1.Component({
        selector: 'app-bar',
        template: "\n\t\t<header class=\"app-bar row middle-xs\">\n\t\t  <span class=\"logo col-xs-10\">\n\t\t    Retain\n\t\t  </span>\n\t\t  <nav class=\"col-xs-2\">\n\t\t    <div class=\"row middle-xs between-xs\">\n\t\t      <span class=\"link\">Settings</span>\n\t\t      <span class=\"link\">signout</span>\n\t\t    </div>\n\t\t  </nav>\n\t\t</header>\n\t",
        styles: ["\n\t\t.app-bar {\n\t\t  height: 65px;\n\t\t  padding: 5px 30px;\n\t\t  background-color: #00BCD4;\n\t\t}\n\t\t.logo {\n\t\t  color: white;\n\t\t  font-size: 30px;\n\t\t  font-weight: 300;\n\t\t  cursor: pointer;\n\t\t}\n\t\t.link {\n\t\t  color: white;\n\t\t  font-size: 24px;\n\t\t  font-weight: 400;\n\t\t  cursor: pointer; \n\t\t}\n\t"]
    })
], AppBar);
exports.AppBar = AppBar;
//# sourceMappingURL=app-bar.js.map