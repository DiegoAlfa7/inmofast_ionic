import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, MenuController, Slides } from "ionic-angular";
import { TabsPage } from "../../tabs/tabs";


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
 
  private slideOpts:any = {
    effect: "flip"
  };

  private animationFlags : any = {

    titleSlide1: true,
    labelSlide1: true,

    titleSlide2: false,
    labelSlide: false,

    titleSlide3: false,
    labelSlide3: false


  };

  @ViewChild("signupSlider") signupSlider: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
    ) {
      //Bloqueamos el menú para que no puedan navegar
      this.menuCtrl.enable(false, "masterMenu");

  }

    private ionViewWillLeave(){

      //Desloqueamos el menú para que puedan navegar
      this.menuCtrl.enable(true, "masterMenu");

    }


  /**
   *
   * @summary Evento de cambio del slide. Lo utilizaremos para saber cuando debemos aplicar las clases de los efectos de entrada de los elementos
   * @private
   * @memberof WelcomePage
   */
  private slideChanged(){

    const currentIndex = this.signupSlider.getActiveIndex();
    
    switch(currentIndex){

      case 1: this.animationFlags.titleSlide2 = true;
              this.animationFlags.labelSlide2 = true;
              break;
      case 2: this.animationFlags.titleSlide3 = true;
              this.animationFlags.labelSlide3 = true;
              break;
      default: break;
      


    }

  }


  /**
   *
   * @summary Utillizaremos esta función para gestionar el evento de 'click' del boton que nos redirigirá a la primera ejecución de la pantalla
   * @private
   * @memberof WelcomePage
   */
  private empecemos(){

    this.navCtrl.push(TabsPage);


  }


}
