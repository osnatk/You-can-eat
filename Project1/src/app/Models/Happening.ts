import {TypePlaceHappening } from "./TypePlaceHappening"

export class Happening
{
    public happeningId: number
    public managerId: number
    public happeningName: string
    public happeningAddress: string
    public happeningDescription: string
    public happeningDate: Date
        public happeningStartDate:Date
        public happeningEndDate: Date
        public happeningTypeId: number
        public happeningPriceType: string
        public happeningPrice: number
        public happeningNumRows: number
        public happeningNumColumns: number
        public happeningPassword:string
    
        public TypePlaceHappening: TypePlaceHappening
}      
 