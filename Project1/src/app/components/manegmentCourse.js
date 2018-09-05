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
var course_details_1 = require("../components/course-details");
require("rxjs/add/operator/map");
var manegmentCourses_service_1 = require("../Services/manegmentCourses-service");
var modal_data_1 = require("./modal/models/modal-data");
var modal_1 = require("./modal/services/modal");
var ManegmentCourse = (function () {
    function ManegmentCourse(courseService, modalService) {
        this.courseService = courseService;
        this.modalService = modalService;
        this.btnCourse = false;
        this.btnGroup = false;
        this.btnDays = false;
        this.GetCourse();
        this.btnCourse = true;
    }
    ManegmentCourse.prototype.GetCourse = function () {
        var _this = this;
        this.courseService.GetCoursesFromServer().
            subscribe(function (data) { _this.courseList = data; }, function (error) { alert("error!"); });
    };
    ManegmentCourse.prototype.newCourse = function () {
        var modalData = new modal_data_1.ModalData();
        modalData.component = course_details_1.CourseDetails;
        modalData.modalHeight = 500;
        modalData.modalWidth = 500;
        this.modalService.openModal(modalData);
    };
    ManegmentCourse.prototype.EditCourse = function (item) {
        this.currentCourse = item;
        var modalData = new modal_data_1.ModalData();
        modalData.component = course_details_1.CourseDetails;
        modalData.modalHeight = 500;
        modalData.modalWidth = 500;
        modalData.options = this.currentCourse;
        this.modalService.openModal(modalData);
    };
    ManegmentCourse.prototype.removeCourse = function (item) {
        var index = this.courseList.indexOf(item);
        this.courseList.splice(index, 1);
        //שמירה בשרת
        this.courseService.removeCourseFromServer(item).subscribe(function (data) { alert("נמחק"); }, function (error) { alert("שגיאה"); });
    };
    ManegmentCourse.prototype.saveToServer = function (item) {
        this.courseService.saveCourseToServer(item).
            subscribe(function (data) { alert("נשמר"); }, function (error) { alert("לא נשמר:("); });
    };
    ManegmentCourse.prototype.clickEvent = function (id) {
        if (id == 'btnCourse') {
            this.btnCourse = true;
            this.btnGroup = false;
            this.btnDays = false;
        }
        else {
            if (id == 'btnGroup') {
                this.btnCourse = false;
                this.btnGroup = true;
                this.btnDays = false;
            }
            else {
                if (id == 'btnDays') {
                    this.btnCourse = false;
                    this.btnGroup = false;
                    this.btnDays = true;
                }
            }
        }
    };
    return ManegmentCourse;
}());
ManegmentCourse = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/manegmentCourse.html",
        selector: "Courses"
    }),
    __metadata("design:paramtypes", [manegmentCourses_service_1.ManegmentCoursesService,
        modal_1.ModalService])
], ManegmentCourse);
exports.ManegmentCourse = ManegmentCourse;
//# sourceMappingURL=manegmentCourse.js.map