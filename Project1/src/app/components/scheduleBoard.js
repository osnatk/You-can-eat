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
var WeeklyScheduleService_1 = require("../Services/WeeklyScheduleService");
var dateRangeSelector_component_1 = require("../components/dateRangeSelector.component");
var UpdateScheduleBoard_1 = require("../Services/UpdateScheduleBoard");
var SingleCourseinBoard_component_1 = require("../components/SingleCourseinBoard.component");
var ScheduleBoard = (function () {
    //CurrentExistingCourse: ExistingCourse;
    function ScheduleBoard(weeklyScheduleService, updateScheduleBoard) {
        var _this = this;
        this.weeklyScheduleService = weeklyScheduleService;
        this.updateScheduleBoard = updateScheduleBoard;
        this.d = new Date();
        this.weeklyScheduleService.GetAllExistingCoursesFromServer().subscribe(function (data) { _this.ExistingCourses = data; }, function (error) { alert("error!"); });
        this.weeklyScheduleService.GetAllGroupsFromServer().subscribe(function (data) { _this.GroupList = data; }, function (error) { });
        this.dayInWeek = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"];
        this.date = new Date();
        this.ChangeDate = this.date;
        this.DateTimeCurrently = new Date();
        this.isbtn1clicked = false;
        this.isbtn2clicked = false;
        this.isbtn3clicked = false;
        this.ChangeGroup; //= this.GroupList[0];
        this.ChangeTable();
    }
    ScheduleBoard.prototype.ngAfterViewInit = function () {
        setTimeout(this.date = this.dateTimeCurrentlyFromComponent.currentDate, 0);
        this.DateTimeCurrently = this.dateTimeCurrentlyFromComponent.leftDay;
    };
    ScheduleBoard.prototype.getday = function (i) {
        this.d.setTime(this.dateTimeCurrentlyFromComponent.leftDay.getTime() + (i * (1000 * 60 * 60 * 24)));
        return this.d.getDate();
    };
    ScheduleBoard.prototype.GeneralEditing = function () {
        this.listsForEdit.forEach(function (x) { return x.EditCourse(); });
    };
    ScheduleBoard.prototype.ngOnInit = function () {
        var _this = this;
        //this.ChangeGroup= this.GroupList[0];
        this.updateScheduleBoard.getNewDate().subscribe(function (date) { _this.ChangeDate = date; });
        this.updateScheduleBoard.getSelectedGroup().subscribe(function (group) { _this.ChangeGroup = group; });
    };
    ScheduleBoard.prototype.SelectGroup = function (group) {
        this.SelectedGroup = group;
        this.updateScheduleBoard.ChangeGroup(group);
    };
    ScheduleBoard.prototype.ClickEvent = function (btnId) {
        if (btnId == "btnEdit") {
            this.isbtn1clicked = !this.isbtn1clicked;
            this.isbtn2clicked = false;
            this.isbtn3clicked = false;
            this.GeneralEditing();
        }
        if (btnId == "btnSave") {
            this.isbtn2clicked = !this.isbtn2clicked;
            this.isbtn1clicked = false;
            this.isbtn3clicked = false;
        }
        if (btnId == "btnPrint") {
            this.isbtn3clicked = !this.isbtn3clicked;
            this.isbtn1clicked = false;
            this.isbtn2clicked = false;
        }
    };
    ScheduleBoard.prototype.ChangeTable = function () {
        var _this = this;
        this.weeklyScheduleService.GetAllExistingCoursesForWeekFromServer(this.DateTimeCurrently, this.ChangeGroup).subscribe(function (courses) { _this.table = courses; });
    };
    return ScheduleBoard;
}());
__decorate([
    core_1.ViewChildren(SingleCourseinBoard_component_1.SingleCourseinBoardComponent),
    __metadata("design:type", core_1.QueryList)
], ScheduleBoard.prototype, "listsForEdit", void 0);
__decorate([
    core_1.ViewChild(dateRangeSelector_component_1.DateRangeSelector),
    __metadata("design:type", dateRangeSelector_component_1.DateRangeSelector)
], ScheduleBoard.prototype, "dateTimeCurrentlyFromComponent", void 0);
ScheduleBoard = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/scheduleBoard.html",
        selector: "scheduleBoard"
    }),
    __metadata("design:paramtypes", [WeeklyScheduleService_1.WeeklyScheduleService, UpdateScheduleBoard_1.UpdateScheduleBoard])
], ScheduleBoard);
exports.ScheduleBoard = ScheduleBoard;
//# sourceMappingURL=scheduleBoard.js.map