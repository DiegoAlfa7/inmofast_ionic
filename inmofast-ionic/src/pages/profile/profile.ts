import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NativeStorage } from "@ionic-native/native-storage";
import { InmoFastAccount } from "../../app/class/interfaces/user_config";
import { STRINGS } from "../../constants/strings";

@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {


  public account:InmoFastAccount;

  constructor(
    public navCtrl: NavController,
    public nativeStorage: NativeStorage) {

  }

  public ionViewDidLoad(){

    this.nativeStorage.getItem(STRINGS.STR_USER_CONFIG).then(

      data => {

        this.account = data;

      },


      error =>{

        console.log(error);

      }

    );

  }

}
