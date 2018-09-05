"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var course_1 = require("../models/course");
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var manegmentCourses_service_1 = require("../Services/manegmentCourses-service");
var CourseDetails = (function (_super) {
    __extends(CourseDetails, _super);
    function CourseDetails(dialogService, courseService) {
        var _this = _super.call(this, dialogService) || this;
        _this.courseService = courseService;
        _this.initModalProperties = function (data) {
            if (data) {
                _this.course = data;
                _this.backup = _this.course;
            }
        };
        _this.onClose = new core_1.EventEmitter();
        if (_this.course == null)
            _this.course = new course_1.Course();
        return _this;
    }
    CourseDetails.prototype.saveToServer = function (item) {
        if (item.Name != null || item.Instructor != null) {
            this.courseService.saveCourseToServer(item).
                subscribe(function (data) { alert("נשמר"); }, function (error) { alert("לא נשמר:("); });
        }
        else {
            this.title = "אין אפשרות לשמור";
        }
    };
    CourseDetails.prototype.cancelChanges = function () {
        if (this.course.Id != null) {
            this.course.Name = this.backup.Name;
            this.course.Instructor = this.backup.Instructor;
        }
        this.onClose.emit();
    };
    return CourseDetails;
}(ng2_bootstrap_modal_1.DialogComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", course_1.Course)
], CourseDetails.prototype, "course", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CourseDetails.prototype, "onClose", void 0);
CourseDetails = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/course-details.html",
        selector: "course-details"
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService,
        manegmentCourses_service_1.ManegmentCoursesService])
], CourseDetails);
exports.CourseDetails = CourseDetails;
//# sourceMappingURL=course-details.js.map