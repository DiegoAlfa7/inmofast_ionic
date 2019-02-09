import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, MenuController, Slides } from "ionic-angular";
import { TabsPage } from "../../tabs/tabs";
import { STRINGS } from "../../../constants/strings";
import { NewsService } from "../../../services/News.service";
import { AppState } from "../../../app/app.state";


/**
 *  
 *  
 * @export
 * @class WelcomePage
 * @summary 
 * Esta Página se utilizará para la primera ejecución de la App, antes si quiera de registrar al usuario por primera vez.
 * 
 * En ella se mostrará información referente a las principales funciones de la App con oipción a añadir 'news' 
 */
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html",
})
export class WelcomePage {
  
  
  /**
   *  Usamos este objeto para almacenar los flags que 
   *  activarán las animaciones de los distintios elementos
   *  de la pantalla a su debido tiempo.
   * 
   * @private
   * @type {any}
   * @memberof WelcomePage
   */
  private animationFlags : any = {

    titleSlide1: true,
    labelSlide1: true,

    titleSlide2: false,
    labelSlide: false,

    titleSlide3: false,
    labelSlide3: false


  };


  /**
   * Binding con un elemento de la template de tipo {Slides}
   * @template
   * @type {Slides}
   * @memberof WelcomePage
   */
  @ViewChild("signupSlider") signupSlider: Slides;

  constructor(
    public _navCtrl: NavController,
    public _navParams: NavParams,
    public _menuCtrl: MenuController,
    public _newsService:NewsService,
    public _appState: AppState
    ) {
      //Bloqueamos el menú para que no puedan navegar
      this._menuCtrl.enable(false, STRINGS.STR_MASTER_MENU);

      //antes de mostrar los slides, verificamos que ha sido la primera ejecución de la app


  }

    /**
     *
     * @event LifeHookEvent - Se ejecuta antes de que esta 'Page' se elimine de la primera capa. 
     * @private
     * @memberof WelcomePage
     */
    private ionViewWillLeave(){

      //Desloqueamos el menú para que puedan navegar
      this._menuCtrl.enable(true, STRINGS.STR_MASTER_MENU);
      //Comprobamos que no es la  primera ejecución de la aplicación

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

    this._navCtrl.push(TabsPage);


  }


}
