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
var PrintHtmlService_1 = require("../Services/PrintHtmlService");
var PrintHtml = (function () {
    function PrintHtml(printHtmlService) {
        this.printHtmlService = printHtmlService;
    }
    PrintHtml.prototype.Print_Html = function () {
        this.printHtmlService.printHtml(this.TextToPrint);
    };
    return PrintHtml;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PrintHtml.prototype, "TextToPrint", void 0);
PrintHtml = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/PrintHtmlComponent.html",
        selector: "print_html"
    }),
    __metadata("design:paramtypes", [PrintHtmlService_1.PrintHtmlService])
], PrintHtml);
exports.PrintHtml = PrintHtml;
//# sourceMappingURL=PrintHtmlComponent.js.map