import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import "rxjs/add/operator/map"
import { Observable } from "rxjs/Observable"
import {Happening } from "../Models/Happening"
@Injectable()

export class clientService
{
    constructor(private http: Http) {
    }


    login({ nameHappaning, PasswordHappaning}): Observable<Happening> {
        return this.http.get("api/Client/existHappening/" + nameHappaning + "/" + PasswordHappaning).map(
            data => {
        
                return data.json() as Happening
            });
    }
}