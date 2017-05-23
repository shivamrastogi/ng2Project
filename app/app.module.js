"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var helloworld_component_1 = require("./helloworld.component");
var index_1 = require("./containers/welcome/index");
var note_container_1 = require("./containers/note-container");
var index_2 = require("./ui/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [
            helloworld_component_1.HelloWorldComponent,
            index_1.WelcomeContainer,
            index_1.Welcome,
            index_2.AppBar,
            index_2.NoteCard,
            note_container_1.NoteContainer,
            index_2.NoteCreator,
            index_2.ColorPicker
        ],
        bootstrap: [
            helloworld_component_1.HelloWorldComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map