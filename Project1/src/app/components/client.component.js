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
var clientService_1 = require("../Services/clientService");
var router_1 = require("@angular/router");
var ClientComponent = (function () {
    function ClientComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.title = "our final project";
    }
    ClientComponent.prototype.LoginMap = function (form) {
        var _this = this;
        debugger;
        this.clientService.login(form.form.value).subscribe(function (data) {
            if (data != null)
                _this.router.navigateByUrl('/map');
        });
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    core_1.Component({
        //template: "<h1>Hello To :{{title}}</h1>",
        templateUrl: "./src/app/components/client.component.html",
        selector: "my-client"
    }),
    __metadata("design:paramtypes", [clientService_1.clientService, router_1.Router])
], ClientComponent);
exports.ClientComponent = ClientComponent;
//# sourceMappingURL=client.component.js.map