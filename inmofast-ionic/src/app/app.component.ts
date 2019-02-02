import {NativeStorage} from "@ionic-native/native-storage";
import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import {Platform} from "ionic-angular";

import { 
  ConfigurationPage,
  TabsPage,
  WelcomePage
 } from "../pages/pages.index";
 
import { STRINGS } from "../constants/strings";
import { THEMES } from "./../constants/themes.data";
import { AppState } from "./app.state";


@Component({
  templateUrl: "app.html"
})
export class MyApp {

  //Camiando el valor de rootPage, cambiamos que pagina se carga la primera
  public rootPage:any = TabsPage;
  public ajustesPage:any = ConfigurationPage;
  

  


  constructor(
    platform: Platform,
    splashScreen: SplashScreen,
    statusBar: StatusBar,
    private state:AppState,
    private nativeStorage: NativeStorage
    ) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkLocalPreferences();
    });

    this.state.set(STRINGS.STR_APP_THEME,THEMES[0]);
    
  }

  /**
   * Este método accederá a el almacenamiento local de la aplicación para
   * decidir, entre otros:
   * 
   * 1- Si es o no la primera ejecución de la aplicación
   * 
   * 2- En caso de que lo sea, el flujo de la aplicación se redirigirá para solicitar
   * los datos necesarios para la configuración inicial de la aplicación (Datos del agente, credenciles...)
   *
   * @memberof MyApp
   */
  public checkLocalPreferences(){

    this.nativeStorage.getItem(STRINGS.STR_USER_CONFIG).then(

      //RESOLVE
      ()=>{
        //Si se ha obtenido la key, ya se habá ejecutado al aplicación al menos una vez
        //aplicamos el flujo convencional
        this.rootPage = WelcomePage;


      },
      //REJECT
      ()=>{
        //Si no se ha podido obtener la key, activamos el flujo de la primera ejecución

        //A IMPLEMENTAR
        //this.nativeStorage.setItem(STRINGS.STR_USER_CONFIG, this.user_config_data);
        

        

      }
    );



  }

}
