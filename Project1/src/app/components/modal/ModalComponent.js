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
var ModalComponent = (function (_super) {
    __extends(ModalComponent, _super);
    function ModalComponent(componentFactoryResolver, dialogService) {
        var _this = _super.call(this, dialogService) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(this.component);
        var childComponentRef = this.content.createComponent(childComponent);
        var dynamicComponent = childComponentRef.instance;
        if (this.options) {
            dynamicComponent.initModalProperties(this.options);
        }
        dynamicComponent.onClose.subscribe(function () {
            _this.result = true;
            _this.close();
            childComponentRef.destroy();
        });
    };
    return ModalComponent;
}(ng2_bootstrap_modal_1.DialogComponent));
__decorate([
    core_1.ViewChild('content', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], ModalComponent.prototype, "content", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'ac-modal',
        templateUrl: './src/app/components/modal/modal.component.html',
        //styleUrls: ['./src/app/components/modal/modal.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        ng2_bootstrap_modal_1.DialogService])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=ModalComponent.js.map