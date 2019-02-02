import {Injectable} from "@angular/core";
import { NativeStorage } from "@ionic-native/native-storage";
import { STRINGS } from "../../constants/strings";
import { InmoFastAccount } from "../../app/class/interfaces/user_config";

/**
 *
 * @export
 * @class NativeStorageMock
 * @extends {NativeStorage}
 * 
 * @summary Usaremos este servicio como un Mock para el plugin de Cordova NativeStorage,
 *  para poder ejecutar normalmente en un browser, de manera que aceleremos el prceso de desarrollo.
 * 
 * TODO: Se puede considerar implementar el método 'setItem' quizás utilizando un segundo plugin 'Storage'
 *  o con un objeto genérico, de momento solamente se podrá llamar para que su ejecución no lance un 
 *  'cordova-not-available' 
 */
@Injectable()
export class NativeStorageMock extends NativeStorage{

    public getItem(reference: string):Promise<any>{

       const promesa = new Promise(

            //Resolve
            (resolve, reject) => {

                //En el caso en que nos soliciten un error, llamamos a 'reject' con un setTimeout, para simular un error con procesamiento
                if(reference.indexOf(STRINGS.STR_ERROR) >= 0){

                    setTimeout(()=>{

                        reject({ error: "User requested error", code: "USER_REQUESTED_ERROR" });

                    }, 1500);

                }else{

                    //En caso contrario pasamos por el switch para poder devolver algo en función de lo que nos hayan pedido
                    switch(reference){

                        case STRINGS.STR_USER_CONFIG:

                            resolve(this.user_config_data); return;

                        case "TEXT":

                            resolve(this.lorem_ipsun); return;

                        default:

                            resolve({ text: "Not supported by NativeStorageMock"}); return;
                        
                            

                    }

                }


            }

        );

        return promesa;
    }

    private readonly lorem_ipsun: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    //Este JSON es para fines de prueba, se deberá implementar un fujo par recoger los datos del cliente especificados en la interfaz InmoFasAccount
    private readonly user_config_data: InmoFastAccount = {

            user: {

            credentials: {
                username: "diegoa",
                type: "PW",
                password: "nuevomilenio",
                recover: {
                    type: "PW",
                    password: "1234"
                }


            },
            profile: {

                personal: {

                    name: "Diego",
                    sname: "Alfaro Sáez",
                    age: 20,
                    birthDate: "1998-05-20T09:27:05",
                    employment: {

                        name: "Agente",
                        description: "Me dedico a la captación de inmuebles"

                    }

                }

            }

        }




    };
   
}