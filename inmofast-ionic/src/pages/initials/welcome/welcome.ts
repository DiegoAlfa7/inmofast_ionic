import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, MenuController, Slides } from "ionic-angular";
import { TabsPage } from "../../tabs/tabs";
import { STRINGS } from "../../../constants/strings";
import { NewsService } from "../../../services/News.service";
import { AppState } from "../../../app/app.state";
import { NativeStorage } from "@ionic-native/native-storage";


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
   *
   * @flag Controla la visibilidad de los slides de inicio de la aplicación, para no mostrarlos cuando no sea la primera ejecución
   * @private
   * @memberof WelcomePage
   */
  private isFirstExecution = true;


  /**
   * Binding con un elemento de la template de tipo {Slides}
   * @template
   * @type {Slides}
   * @memberof WelcomePage
   */
  @ViewChild("beginnerSlides") beginnerSlides: Slides;

  /**
   * Creates an instance of WelcomePage.
   * @param {NavController} _navCtrl Navegación entre páginas
   * @param {NavParams} _navParams Parámetros de la navegación entre páginas
   * @param {MenuController} _menuCtrl Control de los estados y acciones de los menús
   * @param {NewsService} _newsService Obtención de noticias
   * @param {AppState} _appState Control del estado de la ejecución de la app
   * @param {NativeStorage} _natStorage Acceso al almacenamiento permanente DE LA APLICACION 'SharedPreferences'
   * @memberof WelcomePage
   */
  constructor(

    public _navCtrl: NavController,
    public _navParams: NavParams,
    public _menuCtrl: MenuController,
    public _newsService:NewsService,
    public _appState: AppState,
    public _natStorage: NativeStorage
    ) {
      //Bloqueamos el menú para que no puedan navegar
      this._menuCtrl.enable(false, STRINGS.STR_MASTER_MENU);

      //antes de mostrar los slides, verificamos que ha sido la primera ejecución de la app
    //Comprobamos que no es la  primera ejecución de la aplicación
    // this._natStorage.getItem(STRINGS.STR_FIRST_EXECUTION).then(

    //   (resolve) => {

    //     //Se ha obtenido la Key de la primera ejecución, luego no es la primera ejecución efectivamente

    //     this.isFirstExecution = false;
    //   },
    //   (reject) => { 

    //     //No se ha conseguido la key de la primera ejecución , luego sí que es la primera ejecución
    //     this.isFirstExecution = true;
    //   }
    // );


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
      

    }


  /**
   *
   * @summary Evento de cambio del slide. Lo utilizaremos para saber cuando debemos aplicar los ngClass de los efectos de entrada de los elementos
   * @private
   * @memberof WelcomePage
   */
  private slideChanged(){

    const currentIndex = this.beginnerSlides.getActiveIndex();
    
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
