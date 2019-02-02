import {IonicModule} from "ionic-angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import {
    AboutPage,
    ConfigurationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    WelcomePage,
    SinginPage
} from "./pages.index";

@NgModule({
    declarations: [
        AboutPage,
        ConfigurationPage,
        ProfilePage,
        HomePage,
        TabsPage,
        WelcomePage,
        SinginPage       
    ],
    imports: [
        //Importamos el Modulo de Ionic
        IonicModule,
        CommonModule

        
    ],
    bootstrap: [

    ],
    entryComponents: [
        AboutPage,
        ConfigurationPage,
        ProfilePage,
        HomePage,
        TabsPage,
        WelcomePage,
        SinginPage 
    ],
    providers: [],
    exports:[
        AboutPage,
        ConfigurationPage,
        ProfilePage,
        HomePage,
        TabsPage,
        WelcomePage,
        SinginPage    
    ]
})
export class PagesModule { }