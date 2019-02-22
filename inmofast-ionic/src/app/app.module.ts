
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
import { PagesModule } from "../pages/pages.module";
import { NativeStorageMock } from "../services/mocks/NativeStorageMock";
import { NewsService } from "../services/News.service";







@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    //Angular & Ionic stuff
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Custom Stuff
    ComponentsModule,
    PagesModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [],
  providers: [
    StatusBar,
    SplashScreen,
    AppState,
    MenuController,
    {provide: NativeStorage, useClass: NativeStorageMock},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsService
  ]
})
export class AppModule {}
