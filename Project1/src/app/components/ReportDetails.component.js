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
require("rxjs/add/operator/map");
var ReportDetailsService_1 = require("../Services/ReportDetailsService");
var ReportDetailsComponent = (function () {
    function ReportDetailsComponent(ReportDetailsList) {
        var _this = this;
        this.ReportDetailsList = ReportDetailsList;
        this.selectedCourse = '';
        this.ReportDetailsList.GetCoursesFromServer().subscribe(function (data) { _this.CourseList = data; }, function (error) { alert("errorComboBox!"); });
    }
    ReportDetailsComponent.prototype.GetCourseName = function (i) {
        return this.ReportDeatilsList[i].Name;
    };
    ReportDetailsComponent.prototype.GetReportCourseByComboBox = function ($event) {
        console.log(this.selectedCourse);
    };
    ReportDetailsComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        else {
            return null;
        }
    };
    ReportDetailsComponent.prototype.GetReport1 = function (date1, date2, courseName) {
        var _this = this;
        this.ReportDetailsList.GetReportDetailsFromServer(date1, date2, courseName).subscribe(function (data) { _this.ReportDeatilsList = data; }, function (error) { alert("erroraaa!"); });
    };
    return ReportDetailsComponent;
}());
ReportDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/ReportDetails.component.html",
        selector: "ReportDetails"
    }),
    __metadata("design:paramtypes", [ReportDetailsService_1.ReportDetailsService])
], ReportDetailsComponent);
exports.ReportDetailsComponent = ReportDetailsComponent;
//# sourceMappingURL=ReportDetails.component.js.map