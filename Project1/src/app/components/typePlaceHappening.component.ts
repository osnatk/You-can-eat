import { Component } from "@angular/core"
import { TypePlaceHappening } from "../Models/TypePlaceHappening"
import { typePlaceHappeningService } from "../Services/typePlaceHappeningService"
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable"

@Component({
    //template: "<h1>Hello To :{{title}}</h1>",
    templateUrl: "./src/app/components/happening.component.html",
    selector: "my-happening"

})
export class TypePlaceHappening {
    constructor(private typePlaceHappeningService: typePlaceHappeningService, private router: Router) {

    }

    title: string = "our final project";
    typePlaceHappeningList: TypePlaceHappening[];

    getAllTypePlaces(): void {
        this.typePlaceHappeningService.getTypeHappeningFromServer().subscribe(
            data => {
                this.typePlaceHappeningList = data 
            }
        );
    }
}