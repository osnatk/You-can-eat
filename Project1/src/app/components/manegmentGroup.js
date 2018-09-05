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
var manegmentGroups_service_1 = require("../Services/manegmentGroups-service");
var group_details_1 = require("../components/group-details");
require("rxjs/add/operator/map");
var modal_data_1 = require("./modal/models/modal-data");
var modal_1 = require("./modal/services/modal");
var ManegmentGroup = (function () {
    function ManegmentGroup(groupService, modalService) {
        this.groupService = groupService;
        this.modalService = modalService;
        this.btnCourse = false;
        this.btnGroup = false;
        this.btnDays = false;
        this.GetGroups();
        this.btnGroup = true;
    }
    ManegmentGroup.prototype.GetGroups = function () {
        var _this = this;
        this.groupService.GetGroupFromServer().
            subscribe(function (data) { _this.groupsList = data; }, function (error) { alert("Error!"); });
    };
    ManegmentGroup.prototype.newGroup = function () {
        var modalData = new modal_data_1.ModalData();
        modalData.component = group_details_1.GroupDetails;
        modalData.modalHeight = 500;
        modalData.modalWidth = 500;
        this.modalService.openModal(modalData);
    };
    ManegmentGroup.prototype.EditGroup = function (item) {
        this.currentGroup = item;
        var modalData = new modal_data_1.ModalData();
        modalData.component = group_details_1.GroupDetails;
        modalData.modalHeight = 500;
        modalData.modalWidth = 500;
        modalData.options = this.currentGroup;
        this.modalService.openModal(modalData);
    };
    ManegmentGroup.prototype.removeGroup = function (item) {
        var index = this.groupsList.indexOf(item);
        this.groupsList.splice(index, 1);
        //שמירה בשרת
        this.groupService.removeGroupFromServer(item).
            subscribe(function (data) { alert("נמחק"); }, function (error) { alert("לא נשמר"); });
    };
    ManegmentGroup.prototype.saveToServer = function (item) {
        this.groupService.saveGroupToServer(item).subscribe(function (data) { alert("נשמר"); }, function (error) { alert("לא נשמר"); });
    };
    ManegmentGroup.prototype.clickEvent = function (id) {
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
    return ManegmentGroup;
}());
ManegmentGroup = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/manegmentGroup.html",
        selector: "ManegmentGroup"
    }),
    __metadata("design:paramtypes", [manegmentGroups_service_1.ManegmentGroupsService,
        modal_1.ModalService])
], ManegmentGroup);
exports.ManegmentGroup = ManegmentGroup;
//# sourceMappingURL=manegmentGroup.js.map