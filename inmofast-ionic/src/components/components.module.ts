import {IonicModule, NavParams, NavController} from "ionic-angular";
import { NgModule } from "@angular/core";
//Importamos el servicio que nos proporciona el control sobre el estao de la app
import { AppState } from "./../app/app.state";
import { ListingCardComponent } from "./listing-card/listing-card";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu";

@NgModule({
    declarations: [
        //Declaramos los componentes que se van a usar dentro del Módulo 
        //(para la codificacion de los componentes)
        ListingCardComponent,
        MenuComponent
    ],
    imports: [
        //Importamos el Modulo de Ionic
        IonicModule.forRoot(MenuComponent),
        CommonModule
        
    ],
    bootstrap: [

    ],
    entryComponents: [

    ],
    providers: [
        //Añadimos el servicio del estado de la App
        AppState
    ],
    exports:[
        ListingCardComponent,
    MenuComponent
    ]
})
export class ComponentsModule { }