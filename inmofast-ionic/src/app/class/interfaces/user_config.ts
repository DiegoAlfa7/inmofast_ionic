
/**
 * Esta interfaz se utiliza para el mapeo definido de los parámetros
 * que se van a manejar en el ámbito de preferencias del usuario,
 * que se almacenarán internamente con Native Storage.
 *
 * @export
 * @interface InmoFastAccount
 * @version 0.1
 * @author Diego 
 * 
 */
export interface InmoFastAccount{

    user:User;




}
 interface Recover {
    type: string;
    password: string;
}

 interface Credentials {
    username: string;
    type: string;
    password: string;
    recover: Recover;
}

 interface Employment {
    name: string;
    description: string;
}

 interface Personal {
    name: string;
    sname: string;
    age: number;
    birthDate: string;
    employment: Employment;
}

 interface Profile {
    personal: Personal;
}

 interface User {
    credentials: Credentials;
    profile: Profile;
}




