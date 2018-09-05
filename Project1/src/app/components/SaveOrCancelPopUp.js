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
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var SaveOrCancelPopUp = (function (_super) {
    __extends(SaveOrCancelPopUp, _super);
    function SaveOrCancelPopUp(dialogService) {
        var _this = _super.call(this, dialogService) || this;
        //public initModalProperties = (data) => {
        //    if (data) {
        //        this.course = data;
        //        this.backup = this.course;
        //    }
        //}
        //saveToServer(item: Course) {
        //    if (item.Name != null || item.Instructor != null) {
        //        this.courseService.saveCourseToServer(item).
        //            subscribe(data => { alert("נשמר") }, error => { alert("לא נשמר:(") });
        //    }
        //    else {
        //        this.title = "אין אפשרות לשמור";
        //    }
        //}
        _this.onClose = new core_1.EventEmitter();
        return _this;
    }
    SaveOrCancelPopUp.prototype.cancelChanges = function () {
        this.onClose.emit();
    };
    return SaveOrCancelPopUp;
}(ng2_bootstrap_modal_1.DialogComponent));
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SaveOrCancelPopUp.prototype, "onClose", void 0);
SaveOrCancelPopUp = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/SaveOrCancelPopUp.html",
        selector: "SaveOrCancelPopUp"
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService])
], SaveOrCancelPopUp);
exports.SaveOrCancelPopUp = SaveOrCancelPopUp;
//# sourceMappingURL=SaveOrCancelPopUp.js.map