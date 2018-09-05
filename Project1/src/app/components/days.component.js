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
var volunteer_service_1 = require("../Services/volunteer-service");
var Days = (function () {
    function Days(ser) {
        this.ser = ser;
        this.title = "Days Volunteer";
        this.onShowVolunteer = new core_1.EventEmitter();
        this.dayInWeek = ["Sunday", "Monday", "Thu", "Wen", "Tusday", "friday", "shabat"];
    }
    Days.prototype.showVolunteer = function (day) {
        this.onShowVolunteer.emit();
    };
    //getVolunteerByDays(index: number): Volunteer[] {
    //    (this.ser.getVolunteerByIndex(index).subscribe(data => this.listVolunteer = data));
    //    return this.listVolunteer;
    //}
    Days.prototype.getVolunteerByDays = function (index) {
        if (!this.listVolunteer)
            return [];
        return this.listVolunteer.filter(function (v) { return v.days[index] == true; });
    };
    return Days;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], Days.prototype, "listVolunteer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Days.prototype, "onShowVolunteer", void 0);
Days = __decorate([
    core_1.Component({
        //template: "<h1>Hello To :{{title}}</h1>",
        templateUrl: "./src/app/components/days.component.html",
        selector: "days"
        //Shira-app
    }),
    __metadata("design:paramtypes", [volunteer_service_1.VolunteerService])
], Days);
exports.Days = Days;
//# sourceMappingURL=days.component.js.map