import { NgModule, Input } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { HttpModule } from "@angular/http"
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./components/app.component"
import { ManagerComponent } from "./components/manager.component"
import { ClientComponent } from "./components/client.component"
import { MapComponent } from "./components/map.component"
import { TypePlaceHappening } from "./components/typePlaceHappening.component"

import { typePlaceHappeningService } from "./Services/typePlaceHappeningService"

import { clientService } from "./Services/clientService"
import { managerService } from "./Services/managerService"

const routes: Routes = [
    {
        path: 'client',
        component: ClientComponent
    },
    {
        path: 'map',
        component: MapComponent 
    }, 
    {
        path: 'happening',
        component: TypePlaceHappening
    }, 
    {
        path: 'manager',
        component: ManagerComponent
    }
];
@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, ManagerComponent, ClientComponent, MapComponent, TypePlaceHappening],
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [clientService, managerService, typePlaceHappeningService]
})
export class AppModule {

}