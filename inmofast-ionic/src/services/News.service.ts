import { Injectable } from "@angular/core";
import { New } from "../app/class/interfaces/news";

import { APP_NEWS } from "../constants/news.data";

/**
 *
 * Utilizaremos este servicio como repositorio de noticias, o bien locales o bien externas para que las páginas y componentes de la
 * aplicación puedan utilizarlas.
 * @class NewsService
 */
@Injectable()
export class NewsService {

    /**
     * Unidad para almacenar la última lectura de noticias.
     *
     * @private
     * @type {New[]}
     * @memberof NewsService
     */
    private _buffer:New[] = APP_NEWS;

    /**
     * Creates an instance of NewsService.
     * Carga el json local  'constants/news.data.ts' dentro del buffer del servicio
     * @memberof NewsService
     */
    constructor(){

        //ordenamos el array de noticias
        this._buffer = this._buffer.sort((new1, new2) => {

            if(new1.timeStamp > new2.timeStamp){

                return 1;
            }
            if(new2.timeStamp > new1.timeStamp){

                return -1;

            }
            return 0;
        });

    }


    /**
     *
     *
     * @returns {New[]} retorna todas las noticias que hay cargadas en el servicio o 'undefined' si no hay nada
     * @memberof NewsService
     */
    public getAll(): New[]{

        return this._buffer? this.clone(this._buffer): undefined;


    }


    /**
     *
     *
     * @param {Date} date se utilizará como elemento comparativo a la hora de filtrar las fechas
     * @returns {New[]} Un array de noticias con aquellas cuya fecha sea superior a la indicada en los parámetros
     * @memberof NewsService
     */
    public getByDateGreaterThan(date:Date):New[]{

        //Filtramos aquellas noticias cuya fecha sea mayor que la introducida
        const response:New[] = this._buffer.filter((value)=>{

            return value.timeStamp > date; 
    
        });

        return response;


    }
   
    private clone(object) {
        return JSON.parse(JSON.stringify(object));
    }

}