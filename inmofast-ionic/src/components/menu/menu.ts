import { Component, Input } from "@angular/core";

import { NavController, NavParams, MenuController } from "ionic-angular";


import {
  ConfigurationPage,
  TabsPage
} from "../../pages/pages.index";
import { STRINGS } from "../../constants/strings";

@Component({
  selector: "menu-component",
  templateUrl: "menu.html"
})
export class MenuComponent {

  @Input("navBinding") private navContent:any; 
  @Input("navCtrl") private navCtrl:NavController;


  /**
   *  Variable que almacena el nombre del menú principal 
   *  para su uso en el template.
   * @private
   * @memberof MenuComponent
   */
  private menu_name = STRINGS.STR_MASTER_MENU;

  text: string;

  constructor(
   
    ) {
    console.log("Hello MenuComponent Component");
    this.text = "Hello World";
  }

  public ajustes() {

    console.log("Changing to ajustes");
    this.navCtrl.push(ConfigurationPage);

  }
}
