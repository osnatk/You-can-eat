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
var typePlaceHappeningService_1 = require("../Services/typePlaceHappeningService");
var router_1 = require("@angular/router");
var TypePlaceHappening = (function () {
    function TypePlaceHappening(typePlaceHappeningService, router) {
        this.typePlaceHappeningService = typePlaceHappeningService;
        this.router = router;
        this.title = "our final project";
    }
    TypePlaceHappening.prototype.getAllTypePlaces = function () {
        var _this = this;
        this.typePlaceHappeningService.getTypeHappeningFromServer().subscribe(function (data) {
            _this.typePlaceHappeningList = data;
        });
    };
    return TypePlaceHappening;
}());
TypePlaceHappening = __decorate([
    core_1.Component({
        //template: "<h1>Hello To :{{title}}</h1>",
        templateUrl: "./src/app/components/happening.component.html",
        selector: "my-happening"
    }),
    __metadata("design:paramtypes", [typePlaceHappeningService_1.typePlaceHappeningService, router_1.Router])
], TypePlaceHappening);
exports.TypePlaceHappening = TypePlaceHappening;
//# sourceMappingURL=typePlaceHappening.component.js.map