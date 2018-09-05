import { Component } from "@angular/core"
import { NgForm } from "@angular/forms"
import { Manager } from "../Models/Manager"
import { managerService } from "../Services/managerService"
import { Router } from '@angular/router';



@Component({
    //template: "<h1>Hello To :{{title}}</h1>",
    templateUrl: "./src/app/components/manager.component.html",
    selector: "my-manager"

})
export class ManagerComponent {

    constructor(private managerService: managerService, private router: Router) {

    }

    saveNewManger(form: NgForm) {
        debugger
        this.managerService.saveManagerInServer(form.form.value).subscribe(
            data => {
                if (data != null)
                    this.router.navigateByUrl('/happening')
            }, error => {
                console.log(error['message']);
                debugger
            }
        );

    }
}

