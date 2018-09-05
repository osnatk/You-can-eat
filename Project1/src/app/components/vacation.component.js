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
var nonActiveDayStateManager_1 = require("../Services/nonActiveDayStateManager");
var NoActiveDay_1 = require("../models/NoActiveDay");
var vacation = (function () {
    function vacation(nonActiveStateManager) {
        this.nonActiveStateManager = nonActiveStateManager;
        this.index = 0;
        this.active = new NoActiveDay_1.NoActiveDay("", "", "");
    }
    vacation.prototype.Update = function () {
        this.status = !this.status;
        this.active.OrderNumber = this.currentHour;
        this.active.Date = this.date;
        alert(this.date);
        // changed to active
        if (status)
            this.nonActiveStateManager.CencelNoActiveDay(this.active);
        else
            this.nonActiveStateManager.AddNoActiveDay(this.active);
    };
    vacation.prototype.updateDate = function () {
        this.index++;
        this.active.Date = this.date;
    };
    return vacation;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], vacation.prototype, "status", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], vacation.prototype, "currentHour", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Date)
], vacation.prototype, "date", void 0);
vacation = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/vacation.component.html",
        selector: "vacation"
    }),
    __metadata("design:paramtypes", [nonActiveDayStateManager_1.nonActiveDayStateManager])
], vacation);
exports.vacation = vacation;
//# sourceMappingURL=vacation.component.js.map