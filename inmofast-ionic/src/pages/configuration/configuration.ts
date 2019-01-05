import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppState } from '../../app/app.state';

import{ THEMES } from '../../constants/themes.data'


@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
})
export class ConfigurationPage {

  public isDarkTheme:boolean = false;

  constructor(
    public navCtrl:NavController,
    public navParams: NavParams,
    public appState: AppState) {

      let selectedTheme:any = this.appState.get('theme');
      
      //Si el tema contiene la plabra 'dark' es un tema oscuro 
      if(selectedTheme.theme.title.indexOf('dark')!=-1){

        this.isDarkTheme = true;

      }

      console.log(AppState);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationPage');
  }

  public toggleTheme(){

    if(this.isDarkTheme){

      this.appState.set('theme', THEMES[1]);


    }else{

      this.appState.set('theme', THEMES[0]);

    }

  }

}
