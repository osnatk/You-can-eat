import { Component } from "@angular/core"
import { NgForm } from '@angular/forms';
import { clientService } from '../Services/clientService'
import { Router } from '@angular/router';

@Component({
    //template: "<h1>Hello To :{{title}}</h1>",
    templateUrl: "./src/app/components/client.component.html",
    selector: "my-client"

})
export class ClientComponent {
    
    constructor(private clientService: clientService,private router: Router) {

    }
    title: string = "our final project";

    LoginMap(form: NgForm) {
        debugger
        this.clientService.login(form.form.value).subscribe(
            data => {
                if (data != null)
                    this.router.navigateByUrl('/map') 
            }
        );

    }

}