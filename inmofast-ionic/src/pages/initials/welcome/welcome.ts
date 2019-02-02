import { Component } from "@angular/core";
import { NavController, NavParams, IonicPage } from "ionic-angular";


/**
 *  
 *  
 * @export
 * @class WelcomePage
 * @summary 
 * Esta Página se utilizará para la primera ejecución de la App, antes si quiera de registrar al usuario por primera vez.
 * 
 * En ella se mostrará información referente a las principales funciones de la App y 
 */
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html",
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad WelcomePage");
  }

}
