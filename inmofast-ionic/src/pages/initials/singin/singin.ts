import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";


@Component({
  selector: "page-singin",
  templateUrl: "singin.html",
})
export class SinginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SinginPage");
  }

}
