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
var SaveChangesBoardService_1 = require("../Services/SaveChangesBoardService");
var ExistingCourses_1 = require("../models/ExistingCourses");
var Group_1 = require("../models/Group");
var SingleCourseinBoardComponent = (function () {
    function SingleCourseinBoardComponent(scheduleService) {
        var _this = this;
        this.scheduleService = scheduleService;
        this.CurrentDateOfToday = new Date();
        this.flag = true;
        this.IsChange = false;
        this.scheduleService.getAllCoursesFromService().subscribe(function (data) { _this.CourseList = data; }, function (error) { });
        //this.scheduleService.AllGroupesFromService().subscribe(data => { this.GroupList = data }, error => { });
        if (this.CurrentCourse == null)
            this.namecourse = "";
        else
            this.namecourse = this.CurrentCourse.Name;
    }
    SingleCourseinBoardComponent.prototype.EditCourse = function () {
        if (this.flag)
            this.flag = false;
        else
            this.flag = true;
        this.IsChange = false;
    };
    SingleCourseinBoardComponent.prototype.RemoveCourse = function (course) {
        this.flag = true;
        this.CurrentCourse = null;
        this.namecourse = "";
    };
    SingleCourseinBoardComponent.prototype.SaveCourse = function (course, selectCourses) {
        this.namecourse = this.CurrentCourse.Instructor + "-" + this.CurrentCourse.Name;
        this.flag = true;
    };
    SingleCourseinBoardComponent.prototype.onChange = function (selectCourses) {
        var options = selectCourses.list.options;
        var _loop_1 = function (eachObj) {
            if (selectCourses.value == eachObj.value) {
                this_1.CurrentCourse = this_1.CourseList.find(function (c) { return c.Id == eachObj.id; });
            }
        };
        var this_1 = this;
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var eachObj = options_1[_i];
            _loop_1(eachObj);
        }
        ;
        this.SetDateForEachDayInWeek();
        this.IsChange = true;
        this.CurrentExistingCourses = new ExistingCourses_1.ExistingCourse(this.CurrentComponentOrder, this.CurrentDateOfToday, this.CurrentCourse, this.CurrentGroup);
        this.CurrentExistingCourses.CourseId = this.CurrentCourse.Id;
        this.CurrentExistingCourses.GroupId = this.CurrentGroup.Id;
        this.scheduleService.AddExistingCourseThatWasChangedToList(this.CurrentExistingCourses);
    };
    SingleCourseinBoardComponent.prototype.SetDateForEachDayInWeek = function () {
        this.CurrentDateOfToday.setFullYear(this.CurrentDateOfSun.getFullYear(), this.CurrentDateOfSun.getMonth(), this.CurrentDateOfSun.getDate());
        this.CurrentDateOfToday.setDate(this.CurrentDateOfToday.getDate() + this.CurrentDayInWeek);
    };
    return SingleCourseinBoardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Date)
], SingleCourseinBoardComponent.prototype, "CurrentDateOfSun", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Group_1.Group)
], SingleCourseinBoardComponent.prototype, "CurrentGroup", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SingleCourseinBoardComponent.prototype, "CurrentComponentOrder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SingleCourseinBoardComponent.prototype, "CurrentDayInWeek", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SingleCourseinBoardComponent.prototype, "namecourse", void 0);
SingleCourseinBoardComponent = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/SingleCourseinBoard.component.html",
        selector: "SingleCourseinBoard_Component"
    }),
    __metadata("design:paramtypes", [SaveChangesBoardService_1.SaveChangesBoardService])
], SingleCourseinBoardComponent);
exports.SingleCourseinBoardComponent = SingleCourseinBoardComponent;
//# sourceMappingURL=SingleCourseinBoard.component.js.map