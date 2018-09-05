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
var ExistingCourses_1 = require("../models/ExistingCourses");
var Course_1 = require("../models/Course");
var Group_1 = require("../models/Group");
var PrintHtmlService_1 = require("../Services/PrintHtmlService");
var ReportComponent = (function () {
    function ReportComponent(printHtmlService) {
        this.printHtmlService = printHtmlService;
    }
    //ListExistingCourse: ExistingCourse[];
    ReportComponent.prototype.GetReport = function () {
        this.ListExistingCourseFromServer = [
            new ExistingCourses_1.ExistingCourse(1, new Date(2018, 11, 24, 10, 33, 30, 0), new Course_1.Course(1, "משה", "C#"), new Group_1.Group(1, "הנדסת תוכנה שנה א")),
            new ExistingCourses_1.ExistingCourse(2, new Date(2018, 1, 24, 10, 33, 30, 0), new Course_1.Course(2, "דויד", "java"), new Group_1.Group(2, "תכנות"))
        ];
        return this.ListExistingCourseFromServer;
    };
    ReportComponent.prototype.Print_Html = function () {
        this.printHtmlService.printHtml(document.getElementById('printSection').innerHTML);
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/Report.component.html",
        selector: "Report"
    }),
    __metadata("design:paramtypes", [PrintHtmlService_1.PrintHtmlService])
], ReportComponent);
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=Report.component.js.map