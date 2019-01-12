
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler, MenuController} from "ionic-angular";
import { MyApp } from "./app.component";

import { NativeStorage } from "@ionic-native/native-storage";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
//Importamos el servicio que nos proporciona el control sobre el estao de la app
import { AppState } from "./app.state";
//Importamos el módulo de los componentes
import { ComponentsModule } from "../components/components.module";


import {
  AboutPage,
  ConfigurationPage,
  ProfilePage,
  HomePage,
  TabsPage
} from "../pages/pages.index";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    ConfigurationPage
  ],
  imports: [
    //Angular & Ionic stuff
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Custom Stuff
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    ConfigurationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppState,
    MenuController,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
