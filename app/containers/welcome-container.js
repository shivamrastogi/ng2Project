"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WelcomeContainer = (function () {
    function WelcomeContainer() {
    }
    return WelcomeContainer;
}());
WelcomeContainer = __decorate([
    core_1.Component({
        selector: 'welcome-container',
        template: "\n\t\t<welcome>\n\t\t\tHello, You are Welcome!\n\t\t</welcome>\n\t"
    })
], WelcomeContainer);
exports.WelcomeContainer = WelcomeContainer;
//# sourceMappingURL=welcome-container.js.map