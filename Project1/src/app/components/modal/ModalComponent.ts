import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    OnDestroy,
    ViewChild,
    ViewContainerRef, ViewEncapsulation, Input
} from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Subscription } from 'rxjs/Subscription';
import { IModalData } from './models/imodal-data';
import { DynamicComponent } from './models/dynamic';


@Component({
    selector: 'ac-modal',
    templateUrl: './src/app/components/modal/modal.component.html',
    //styleUrls: ['./src/app/components/modal/modal.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class ModalComponent extends
    DialogComponent<IModalData, boolean> implements IModalData, OnInit, OnDestroy {
    title: string;
    component: any;
    componentProps: any;
    confirmHandler: any;
    modalHeight: number;
    modalWidth: number;
    options: any;
    @ViewChild('content', { read: ViewContainerRef })
    content: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        dialogService: DialogService) {
        super(dialogService);
    }

    ngOnInit() {
        const childComponent = this.componentFactoryResolver.resolveComponentFactory(this.component);
        const childComponentRef = this.content.createComponent(childComponent);
        const dynamicComponent = <DynamicComponent>childComponentRef.instance;
        if (this.options) {
            dynamicComponent.initModalProperties(this.options);
        }
        dynamicComponent.onClose.subscribe(() => {
            this.result = true;
            this.close();
            childComponentRef.destroy();
        });
    }
}
