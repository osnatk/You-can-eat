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
var ScheduleBoardStateManager_1 = require("../Services/ScheduleBoardStateManager");
var ExistingCoursesService_1 = require("../Services/ExistingCoursesService");
var SaveCoursesBoard = (function () {
    function SaveCoursesBoard(ScheduleBoardStateManager, existingCoursesService) {
        this.ScheduleBoardStateManager = ScheduleBoardStateManager;
        this.existingCoursesService = existingCoursesService;
        this.btnSave = false;
        this.btnSaveChange = false;
        this.btnEndSave = false;
        this.valid = true;
    }
    SaveCoursesBoard.prototype.SaveChanges = function () {
        this.btnSave = false;
        this.btnSaveChange = true;
        this.listExistingCourse = this.ScheduleBoardStateManager.GetAllExistingCourseThatWasChanged();
        this.existingCoursesService.save(this.listExistingCourse, this.dateToPost, this.comments).subscribe(function (data) { alert("Saved succsessed!!!"); });
    };
    SaveCoursesBoard.prototype.CancelProcess = function () {
        this.btnSaveChange = false;
    };
    SaveCoursesBoard.prototype.EndSave = function () {
        this.btnSaveChange = false;
        this.btnEndSave = true;
    };
    SaveCoursesBoard.prototype.parseDate = function (dateString) {
        if (dateString) {
            alert(dateString + " is selected");
            this.date = new Date(dateString);
            this.dateToPost = this.date;
            return this.date;
        }
        else {
            return null;
        }
    };
    SaveCoursesBoard.prototype.SetChecked = function () {
        this.isChecked = true;
    };
    SaveCoursesBoard.prototype.ThisWeekUntil = function () {
        this.dateToPost = new Date("12-12-18");
    };
    return SaveCoursesBoard;
}());
SaveCoursesBoard = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/SaveCoursesBoard.component.html",
        selector: "SaveCoursesBoard"
    }),
    __metadata("design:paramtypes", [ScheduleBoardStateManager_1.ScheduleBoardStateManager, ExistingCoursesService_1.ExistingCoursesService])
], SaveCoursesBoard);
exports.SaveCoursesBoard = SaveCoursesBoard;
//# sourceMappingURL=SaveCoursesBoard.component.js.map