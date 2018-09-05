import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import "rxjs/add/operator/map"
import { Observable } from "rxjs/Observable"
import { Happening } from "../Models/Happening"
import { TypePlaceHappening } from "../Models/TypePlaceHappening"


@Injectable()

export class typePlaceHappeningService {
    constructor(private http: Http) {
    }


    getTypeHappeningFromServer(): Observable<TypePlaceHappening[]> {
        return this.http.get("api/typePlaceHappening/getAllTypePlaces/" ).map(
            data => {
                debugger

                return data.json() as TypePlaceHappening[]
            });
    }
}