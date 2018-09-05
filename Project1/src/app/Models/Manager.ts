import {Happening} from "./Happening"

export class Manager {
        public managerId:number
        public managerName:string
        public managerNameUser: string
        public managerPassword: number
        public managerAddress:string
        public managerMail: string
    //מאיזה סוג רשימת אירועים למנהל
        public Happening: Array<Happening>
}