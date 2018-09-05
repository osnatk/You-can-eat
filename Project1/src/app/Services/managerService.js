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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var managerService = (function () {
    function managerService(http) {
        this.http = http;
    }
    managerService.prototype.saveManagerInServer = function (_a) {
        var name = _a.name, userName = _a.userName, address = _a.address, mail = _a.mail;
        return this.http.post("api/manager/saveManager/", {
            managerName: name,
            managerNameUser: userName,
            managerAddress: address,
            managerMail: mail
        }).map(function (data) {
            return data.json();
        });
    };
    return managerService;
}());
managerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], managerService);
exports.managerService = managerService;
//# sourceMappingURL=managerService.js.map