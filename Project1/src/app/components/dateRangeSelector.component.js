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
var UpdateScheduleBoard_1 = require("../Services/UpdateScheduleBoard");
var DateRangeSelector = (function () {
    function DateRangeSelector(updateScheduleBoard) {
        this.updateScheduleBoard = updateScheduleBoard;
        this.currentDate = new Date();
        this.date = new Date();
        this.leftDay = new Date();
        this.rightDay = new Date();
        this.SetLeftDay();
        this.SetRightDay();
        this.UpdateVariables();
        this.day = this.leftDay.getDay();
    }
    DateRangeSelector.prototype.SetLeftDay = function () {
        this.leftDay.setDate(this.currentDate.getDate() - ((this.currentDate.getDay() + 1) - 1));
    };
    DateRangeSelector.prototype.SetRightDay = function () {
        this.rightDay.setDate(this.currentDate.getDate() + (7 - (this.currentDate.getDay() + 1)));
    };
    DateRangeSelector.prototype.UpdateDecreaseDate = function () {
        this.leftDay.setDate(this.leftDay.getDate() - 7);
        this.rightDay.setDate(this.rightDay.getDate() - 7);
        this.date.setDate(this.date.getDate() - 7);
    };
    DateRangeSelector.prototype.UpdateIncreaseDate = function () {
        this.leftDay.setDate(this.leftDay.getDate() + 7);
        this.rightDay.setDate(this.rightDay.getDate() + 7);
        this.date.setDate(this.date.getDate() + 7);
    };
    DateRangeSelector.prototype.DecreaseDate = function () {
        this.UpdateDecreaseDate();
        this.UpdateVariables();
        this.day = this.leftDay.getDay();
        this.updateScheduleBoard.ChangeDate(this.date);
    };
    DateRangeSelector.prototype.IncreaseDate = function () {
        this.UpdateIncreaseDate();
        this.UpdateVariables();
        this.day = this.leftDay.getDay();
        this.updateScheduleBoard.ChangeDate(this.date);
    };
    DateRangeSelector.prototype.UpdateVariables = function () {
        this.sunday = this.leftDay.getDate();
        this.saturday = this.rightDay.getDate();
        this.currentMonth = this.rightDay.getMonth() + 1;
    };
    return DateRangeSelector;
}());
DateRangeSelector = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/DateRangeSelector.component.html",
        selector: "DateRangeSelector"
    }),
    __metadata("design:paramtypes", [UpdateScheduleBoard_1.UpdateScheduleBoard])
], DateRangeSelector);
exports.DateRangeSelector = DateRangeSelector;
//# sourceMappingURL=dateRangeSelector.component.js.map