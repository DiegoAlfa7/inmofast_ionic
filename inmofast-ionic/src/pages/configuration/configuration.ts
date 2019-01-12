import {NativeStorage} from "@ionic-native/native-storage";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AppState } from "../../app/app.state";


import { THEMES } from "../../constants/themes.data";
import { STRINGS } from "../../constants/strings";
import { InmoFastAccount } from "../../app/class/interfaces/user_config";


@Component({
  selector: "page-configuration",
  templateUrl: "configuration.html",
})
export class ConfigurationPage {

  public isDarkTheme = false;

  private account:InmoFastAccount;

  constructor(
    public navCtrl:NavController,
    public navParams: NavParams,
    public appState: AppState,
    public nativeStorage:NativeStorage) {

      const selectedTheme:any = this.appState.get();
      
      //Si el tema contiene la plabra 'dark' es un tema oscuro 
      if(selectedTheme.theme.title.indexOf("dark")!==-1){

        this.isDarkTheme = true;

      }

      console.log(AppState);
      nativeStorage.getItem(STRINGS.STR_USER_CONFIG).then(

        (item)=>{

          
          this.account = item;
          console.log(this.account);
        }

      );
  }


  public toggleTheme(){

    if(this.isDarkTheme){

      this.appState.set(STRINGS.STR_APP_THEME, THEMES[1]);


    }else{

      this.appState.set(STRINGS.STR_APP_THEME, THEMES[0]);

    }

  }

}
