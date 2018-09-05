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
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var ModalComponent_1 = require("../ModalComponent");
//export interface ConfirmModel {
//    title: string;
//    message: string;
//}
var ModalService = (function () {
    function ModalService(dialogService) {
        this.dialogService = dialogService;
    }
    ModalService.prototype.openModal = function (modalData) {
        var dialogOptions = {};
        dialogOptions.closeByClickingOutside = true;
        dialogOptions.backdropColor = 'rgba(0,0,0,0.6)';
        var disposable = this.dialogService.addDialog(ModalComponent_1.ModalComponent, modalData, dialogOptions)
            .subscribe(function (isConfirmed) {
            if (modalData.confirmHandler) {
                modalData.confirmHandler();
            }
        });
    };
    return ModalService;
}());
ModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService])
], ModalService);
exports.ModalService = ModalService;
//# sourceMappingURL=modal.js.map