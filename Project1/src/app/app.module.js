"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./components/app.component");
var manager_component_1 = require("./components/manager.component");
var client_component_1 = require("./components/client.component");
var map_component_1 = require("./components/map.component");
var typePlaceHappening_component_1 = require("./components/typePlaceHappening.component");
var typePlaceHappeningService_1 = require("./Services/typePlaceHappeningService");
var clientService_1 = require("./Services/clientService");
var managerService_1 = require("./Services/managerService");
var routes = [
    {
        path: 'client',
        component: client_component_1.ClientComponent
    },
    {
        path: 'map',
        component: map_component_1.MapComponent
    },
    {
        path: 'happening',
        component: typePlaceHappening_component_1.TypePlaceHappening
    },
    {
        path: 'manager',
        component: manager_component_1.ManagerComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [app_component_1.AppComponent, manager_component_1.ManagerComponent, client_component_1.ClientComponent, map_component_1.MapComponent, typePlaceHappening_component_1.TypePlaceHappening],
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(routes)],
        providers: [clientService_1.clientService, managerService_1.managerService, typePlaceHappeningService_1.typePlaceHappeningService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map