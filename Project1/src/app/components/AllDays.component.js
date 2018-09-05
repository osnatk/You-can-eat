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
var dateRangeSelector_component_1 = require("./dateRangeSelector.component");
var nonActiveDayService_1 = require("../Services/nonActiveDayService");
var nonActiveDayStateManager_1 = require("../Services/nonActiveDayStateManager");
//import {CourseInSchedule }from "../components/courseInSchedule"
var AllDays = (function () {
    function AllDays(nonActiveDayService, nonActiveDayStateManager) {
        this.nonActiveDayService = nonActiveDayService;
        this.nonActiveDayStateManager = nonActiveDayStateManager;
        this.isVacation = true;
        this.day = new Date();
        this.dayInWeek = ["ראשון", "שני", "שלישי ", "רביעי", "חמישי ", "שישי"];
        this.DateTimeCurrently = new Date();
    }
    AllDays.prototype.ChangeAll = function () {
        this.isVacation = !this.isVacation;
    };
    AllDays.prototype.ngAfterViewInit = function () {
        setTimeout(this.DateTimeCurrently = this.dateTimeCurrentlyFromComponent.currentDate, 0);
    };
    AllDays.prototype.getday = function (i) {
        if (i == 0)
            this.day.setDate(this.DateTimeCurrently.getDate() - ((this.DateTimeCurrently.getDay() + 1) - (i + 1)));
        else
            this.day.setDate(this.day.getDate() + 1);
        return this.day.getDate();
    };
    AllDays.prototype.saveChangesInDB = function () {
        if (this.nonActiveDayStateManager.IsStillChanges()) {
            //DB שמירת הרשימות ב  
            this.nonActiveDayService.saveActiveDaysListToService(this.nonActiveDayStateManager.GetChangeInActiveDaysList()).
                subscribe(function (data) { alert("seccued"); }, function (error) { alert("error"); });
            this.nonActiveDayService.saveNonActiveDaysListToService(this.nonActiveDayStateManager.GetChangeInListAddNoActiveDay()).
                subscribe(function (data) { alert("seccued"); }, function (error) { alert("error"); });
            //ריקון הרשימות
            this.nonActiveDayStateManager.ClearNoActiveDay();
        }
    };
    return AllDays;
}());
__decorate([
    core_1.ViewChild(dateRangeSelector_component_1.DateRangeSelector),
    __metadata("design:type", dateRangeSelector_component_1.DateRangeSelector)
], AllDays.prototype, "dateTimeCurrentlyFromComponent", void 0);
AllDays = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/AllDays.component.html",
        selector: "AllDays"
    }),
    __metadata("design:paramtypes", [nonActiveDayService_1.nonActiveDayService,
        nonActiveDayStateManager_1.nonActiveDayStateManager])
], AllDays);
exports.AllDays = AllDays;
//# sourceMappingURL=AllDays.component.js.map