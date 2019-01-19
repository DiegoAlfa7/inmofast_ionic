import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AppState } from "../../app/app.state";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  constructor(
    
    public navCtrl: NavController,
    public state: AppState) {

      console.log(this.state.get());

  }

}
