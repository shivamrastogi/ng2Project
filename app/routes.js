"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./containers/index");
exports.routes = router_1.RouterModule.forRoot([
    {
        path: '',
        component: index_1.Main,
        children: [
            { path: '', component: index_1.Notes },
            { path: 'about', component: index_1.About }
        ]
    },
    { path: '**', redirectTo: '' }
]);
//# sourceMappingURL=routes.js.map