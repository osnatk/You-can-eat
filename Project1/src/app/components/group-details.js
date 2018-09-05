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
var group_1 = require("../models/group");
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var manegmentGroups_service_1 = require("../Services/manegmentGroups-service");
var GroupDetails = (function (_super) {
    __extends(GroupDetails, _super);
    function GroupDetails(dialogService, groupService) {
        var _this = _super.call(this, dialogService) || this;
        _this.groupService = groupService;
        _this.initModalProperties = function (data) {
            if (data) {
                _this.group = data;
                _this.backup = _this.group;
            }
        };
        _this.onClose = new core_1.EventEmitter();
        if (_this.group == null)
            _this.group = new group_1.Group();
        return _this;
    }
    GroupDetails.prototype.saveToServer = function (item) {
        if (item.Name != null) {
            this.groupService.saveGroupToServer(item).
                subscribe(function (data) { alert("נשמר"); }, function (error) { alert("לא נשמר:("); });
        }
        else {
            this.title = "אין אפשרות לשמור";
        }
        this.groupService.saveGroupToServer(item).
            subscribe(function (data) { alert("נשמר"); }, function (error) { alert("לא נשמר:("); });
    };
    GroupDetails.prototype.cancelChanges = function () {
        if (this.group.Id != null) {
            this.group.Name = this.backup.Name;
        }
        this.onClose.emit();
    };
    return GroupDetails;
}(ng2_bootstrap_modal_1.DialogComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", group_1.Group)
], GroupDetails.prototype, "group", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], GroupDetails.prototype, "onClose", void 0);
GroupDetails = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/group-details.html",
        selector: "group-details"
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService,
        manegmentGroups_service_1.ManegmentGroupsService])
], GroupDetails);
exports.GroupDetails = GroupDetails;
//# sourceMappingURL=group-details.js.map