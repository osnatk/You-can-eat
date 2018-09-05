import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import "rxjs/add/operator/map"
import { Observable } from "rxjs/Observable"
import { Happening } from "../Models/Happening"
import { Manager} from "../Models/Manager"


@Injectable()

export class managerService {

    constructor(private http: Http) {
    }

    saveManagerInServer({ name, userName, address, mail }): Observable<string> {
        return this.http.post("api/manager/saveManager/", {
            managerName: name,
            managerNameUser: userName,
            managerAddress: address,
            managerMail: mail
        }).map(
            data => {
                return data.json() as string
            });
    }



    //login({ name, password }): Observable<Happening> {
    //    return this.http.get("api/Client/existHappening/" + name + "/" + password).map(
    //        data => {
    //            return data.json() as Happening
    //        });
    //}
}