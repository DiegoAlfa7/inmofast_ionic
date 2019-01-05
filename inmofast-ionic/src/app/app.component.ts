import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Platform} from 'ionic-angular';
import { ConfigurationPage } from '../pages/pages.index';
import { TabsPage } from '../pages/tabs/tabs';
import { THEMES } from "./../constants/themes.data";
import { AppState } from './app.state';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //Camiando el valor de rootPage, cambiamos que pagina se carga la primera
  public rootPage:any = TabsPage;
  public ajustesPage:any = ConfigurationPage;
  
  constructor(
    platform: Platform,
    splashScreen: SplashScreen,
    statusBar: StatusBar,
    private state:AppState
    ) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.state.set('theme',THEMES[0]);
    
  }
}
