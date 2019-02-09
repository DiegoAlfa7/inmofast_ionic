/**
 *
 * Interfaz que especifica la información contenida en una noticia que pueda ser expuesta en la aplicación
 * en cualquier sitio.
 * @export
 * @interface New
 */
export interface New {

    tittle:string;
    description:string;
    images:string[];
    timeStamp:Date;
    body:string;

    /**
     * Esta variable se utiliza cuando se quiere tener la capacidad de guardar un json de cualquier tipo dentro de la noticia
     * versatillizando el uso de la misma.
     *
     * @type {NewCustomBody}
     * @memberof New
     */
    custom:NewCustomBody;



}


/**
 * Interaz que especifica como se guarda a información particular de cada noticia, aportando un nombre explicativo que tabmién podrá ser usado como 
 * flag en algún momento.
 *
 * @export
 * @interface NewCustomBody
 */
export interface NewCustomBody {

    body:any;

    /**
     * Identifica al cuerpo 'custom' de la noticia en cuestión
     *
     * @type {string}
     * @memberof NewCustomBody
     */
    custom_name:string;


}