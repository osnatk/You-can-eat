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
var NoActiveDay_1 = require("../models/NoActiveDay");
var nonActiveDayStateManager_1 = require("../Services/nonActiveDayStateManager");
var vacation_component_1 = require("./vacation.component");
var NoActiveSchedule = (function () {
    function NoActiveSchedule(_nonActiveDaysStateManager, _nonActiveDaysService) {
        var _this = this;
        this._nonActiveDaysStateManager = _nonActiveDaysStateManager;
        this._nonActiveDaysService = _nonActiveDaysService;
        this.dayInWeek = ["Sunday", "Monday", "Tuesday ", "Wednesday", "Thursday ", "Friday"];
        this.num = 0;
        this.DateTimeCurrently = new Date();
        _nonActiveDaysService.getAllNoActiveDayFromService().subscribe(function (d) { _this.noActiveDays = d; });
    }
    NoActiveSchedule.prototype.SundayCurrently = function () { return 0; };
    ;
    NoActiveSchedule.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(this.DateTimeCurrently = this.dateTimeCurrentlyFromComponent.currentDate, 0);
        setTimeout(function () { return _this.SundayCurrently = function () { return _this.dateTimeCurrentlyFromComponent.sunday; }; }, 0);
    };
    NoActiveSchedule.prototype.changeEveryone = function () {
        this.vacationComponent.forEach(function (vac) { return vac.status = !vac.status; });
    };
    NoActiveSchedule.prototype.AddDay = function () {
        this.day = new NoActiveDay_1.NoActiveDay(new Date("2018,5,11"), 1, "המורה חולה");
        this._nonActiveDaysStateManager.AddNoActiveDay(this.day);
    };
    NoActiveSchedule.prototype.Remove = function () {
        //this.day = new NoActiveDay( new Date("2018,04,27"), 2, "חתונת הבת של המנהלת");
        //this.day.Id = 2;
        if (this._nonActiveDaysStateManager.GetChangeInListAddNoActiveDay().indexOf(this.day) >= 0)
            this._nonActiveDaysStateManager.CencelNoActiveDay(this.day);
        else
            this._nonActiveDaysStateManager.RemoveNoActiveDay(this.day);
    };
    NoActiveSchedule.prototype.SaveAll = function () {
        this._nonActiveDaysService.saveNonActiveDaysListToService(this._nonActiveDaysStateManager.GetChangeInListAddNoActiveDay()).subscribe(function (data) { alert("save success!!"); });
        this._nonActiveDaysService.saveActiveDaysListToService(this._nonActiveDaysStateManager.GetChangeInActiveDaysList()).subscribe(function (data) { alert("save success!!"); });
        this._nonActiveDaysStateManager.ClearNoActiveDay();
    };
    NoActiveSchedule.prototype.Exit = function () {
        alert("did you can exit? " + this._nonActiveDaysStateManager.IsStillChanges());
    };
    return NoActiveSchedule;
}());
__decorate([
    core_1.ViewChild(dateRangeSelector_component_1.DateRangeSelector),
    __metadata("design:type", dateRangeSelector_component_1.DateRangeSelector)
], NoActiveSchedule.prototype, "dateTimeCurrentlyFromComponent", void 0);
__decorate([
    core_1.ViewChildren(vacation_component_1.vacation),
    __metadata("design:type", Array)
], NoActiveSchedule.prototype, "vacationComponent", void 0);
NoActiveSchedule = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/NoActiveScheduleComponent.html",
        selector: "NoActiveSchedule"
    }),
    __metadata("design:paramtypes", [nonActiveDayStateManager_1.nonActiveDayStateManager, nonActiveDayService_1.nonActiveDayService])
], NoActiveSchedule);
exports.NoActiveSchedule = NoActiveSchedule;
//# sourceMappingURL=NoActiveSchedule.js.map