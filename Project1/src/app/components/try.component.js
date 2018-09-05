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
var nonActiveDayService_1 = require("../Services/nonActiveDayService");
var nonActiveDayStateManager_1 = require("../Services/nonActiveDayStateManager");
var modal_data_1 = require("./modal/models/modal-data");
var modal_1 = require("./modal/services/modal");
var SaveOrCancelPopUp_1 = require("../components/SaveOrCancelPopUp");
var Try = (function () {
    function Try(nonActiveDayService, nonActiveDayStateManager, modalService) {
        this.nonActiveDayService = nonActiveDayService;
        this.nonActiveDayStateManager = nonActiveDayStateManager;
        this.modalService = modalService;
        this.statusbtn1 = false;
        this.statusbtn2 = false;
        this.statusbtn3 = false;
        this.flagForSavingChanges = false;
    }
    Try.prototype.changeRouter = function () {
        //if (!this.nonActiveDayStateManager.IsStillChanges()) {
        //    this.flagForSavingChanges = true;
        //    const modalData = new ModalData();
        //    modalData.component = SaveOrCancelPopUp;
        //    modalData.modalHeight = 500;
        //    modalData.modalWidth = 500;
        //    this.modalService.openModal(modalData);
        //}
    };
    Try.prototype.clickEvent = function (id) {
        if (!this.nonActiveDayStateManager.IsStillChanges()) {
            this.flagForSavingChanges = true;
            var modalData = new modal_data_1.ModalData();
            modalData.component = SaveOrCancelPopUp_1.SaveOrCancelPopUp;
            modalData.modalHeight = 500;
            modalData.modalWidth = 500;
            this.modalService.openModal(modalData);
        }
        if (id == "schduleGroups") {
            this.statusbtn1 = true;
            this.statusbtn2 = false;
            this.statusbtn3 = false;
        }
        if (id == "manegement") {
            this.statusbtn2 = true;
            this.statusbtn1 = false;
            this.statusbtn3 = false;
        }
        if (id == "report") {
            this.statusbtn3 = true;
            this.statusbtn1 = false;
            this.statusbtn2 = false;
        }
    };
    Try.prototype.saveChangesInDB = function () {
        this.nonActiveDayService.saveActiveDaysListToService(this.nonActiveDayStateManager.GetChangeInActiveDaysList()).
            subscribe(function (data) { alert("seccued"); }, function (error) { alert("error"); });
        this.nonActiveDayService.saveNonActiveDaysListToService(this.nonActiveDayStateManager.GetChangeInListAddNoActiveDay()).
            subscribe(function (data) { alert("seccued"); }, function (error) { alert("error"); });
        this.nonActiveDayStateManager.ClearNoActiveDay();
    };
    return Try;
}());
Try = __decorate([
    core_1.Component({
        templateUrl: "./src/app/components/try.component.html",
        selector: "try"
    }),
    __metadata("design:paramtypes", [nonActiveDayService_1.nonActiveDayService,
        nonActiveDayStateManager_1.nonActiveDayStateManager,
        modal_1.ModalService])
], Try);
exports.Try = Try;
//@Input()
//volunteer: Volunteer;
//@Output()
//onSaveNewVolunteer: EventEmitter<Volunteer> = new EventEmitter<Volunteer>();
////allUsers: User[] = USERS;
//submitted: boolean = false;
//saveNewVolunteer()
//{
//    this.onSaveNewVolunteer.emit(this.volunteer);
//    this.submitted = true;         
//    this.volunteer = null;
//}
//<style>
//.MyClass123{
//    content: url("http://imgur.com/SZ8Cm.jpg");
//}
//</style>
//    < img class="MyClass123" /> 
//# sourceMappingURL=try.component.js.map