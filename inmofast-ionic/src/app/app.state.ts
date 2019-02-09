import {Injectable} from "@angular/core";

@Injectable()
export class AppState{
    
    private _state = {};

    
    //return a clone of state
    get state() {
        return this._state = this.clone(this._state);
    }

    private clone(object){
        return JSON.parse(JSON.stringify(object));
    }


    /**
     * This method is used for colleting data from the App State in Runtime 
     *
     * @param {String} [prop] the name of the key that holds the wanted object in the App State Tree ex: 'theme':{title: 'example', theme:'theme-example'}
     * @returns {Object} an object representation of the wanted node
     * @memberof AppState
     */
    get(prop?:string):object {
        const state = this.state;
        return state.prop? state[prop] : state;
    }

    set(prop:string,value:any){
        //update the specified state property with the value
        console.log(prop+": ");
        console.log(value);
        return this._state[prop] = value;

    }
}