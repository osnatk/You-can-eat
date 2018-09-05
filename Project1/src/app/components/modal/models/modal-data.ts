import { IModalData } from './imodal-data';
export class ModalData implements IModalData {
    component: any;
    title: string;
    confirmHandler: any;
    modalHeight: number;
    modalWidth: number;
    options: any;
}