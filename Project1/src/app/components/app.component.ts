import { Component } from "@angular/core"
import { Router } from '@angular/router';

@Component({
    //template: "<h1>Hello To :{{title}}</h1>",
    templateUrl:"./src/app/components/app.component.html",
    selector:"my-app"
       
})
export class AppComponent
{
 
    title: string = "our final project";

    
    constructor(private router: Router) {
        this.router.navigateByUrl('/client')
    }


}