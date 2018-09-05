import { IModalService } from './imodal';
import { Injectable } from '@angular/core';
import { DialogService, DialogOptions, DialogComponent } from 'ng2-bootstrap-modal';
import { ModalComponent } from '../ModalComponent';
import { IModalData } from '../models/imodal-data';
import { Router } from '@angular/router';
//export interface ConfirmModel {
//    title: string;
//    message: string;
//}
@Injectable()
export class ModalService implements IModalService {

    constructor(private dialogService: DialogService) {
    }

    public openModal(modalData: IModalData) {
        const dialogOptions: DialogOptions = {};
        dialogOptions.closeByClickingOutside = true;
        dialogOptions.backdropColor = 'rgba(0,0,0,0.6)';
        const disposable = this.dialogService.addDialog(ModalComponent, modalData, dialogOptions)
            .subscribe((isConfirmed) => {
                if (modalData.confirmHandler) {
                    modalData.confirmHandler();
                }
            });
    }

    //public closeModal(com: DialogComponent<ConfirmModel, boolean>) {
    //    this.dialogService.removeDialog(com);
    //}
}