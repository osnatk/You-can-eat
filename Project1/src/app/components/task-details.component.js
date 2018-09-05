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
var volunteer_1 = require("../models/volunteer");
var TaskDetails = /** @class */ (function () {
    function TaskDetails() {
    }
    //@Output()
    //onSaveNewTask: EventEmitter<Volunteer> = new EventEmitter<Volunteer>();
    //allUsers: User[] = USERS;
    //submitted: boolean = false;
    TaskDetails.prototype.saveNewTask = function () {
        //this.onSaveNewTask.emit(this.task);
        //this.submitted = true;
        //איפוס המשימה כדי שהפאנל לא יוצג יותר אחרי השמירה
        //this.volunteer = null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", volunteer_1.Volunteer)
    ], TaskDetails.prototype, "volunteer", void 0);
    TaskDetails = __decorate([
        core_1.Component({
            templateUrl: "./src/app/components/task-details.component.html",
            selector: "task-details"
        })
    ], TaskDetails);
    return TaskDetails;
}());
exports.TaskDetails = TaskDetails;
//# sourceMappingURL=task-details.component.js.map