import { parseBool } from './parseBool.js';

const typedef = {
    Boolean : 'Boolean',
    Number : 'Number',
    String : 'String',
    Object : 'Object',
    Array : 'Array'
};

class goraniStore {
    // properties
    key = null;
    type = null;
    value = null;

    // constructor
    constructor(item) {
        this.key = item.key;
        this.type = item.type;

        // save the defaultValue if there isn't item in localStorage
        const currentValue = this.getFromLocalStorage();
        if (currentValue === null) {
            this.set(item.defaultValue);
        } else {
            this.value = currentValue;
        }
    };

    //methods : set, get, info
    set(newValue) {
        // Check if the type of new value(you want to save) matches goraniStore Object's.
        // If not, set() can't save new value to this Object
        if (isValid({ value: newValue, type: this.type })) {
            //localStorage.setItem(this.key, String(newValue));
            localStorage.setItem(this.key, JSON.stringify(newValue));
            this.value = this.getFromLocalStorage();
            return this.value;
        } else {
            console.error(`[GoraniStore:set]Types are not matched --- ${this.key}`);
        }
    };

    get() {
        if(this.value==null){
            console.error(`[GoraniStore:get]The property 'value' has no valid value --- ${this.key}`);
            return null;
        } else {
            return this.value;
        }
    };

    getFromLocalStorage() {
        const raw = localStorage.getItem(this.key);
        //let result = null;

        if((Object.keys(typedef)).includes(this.type)){
            const result = JSON.parse(raw)
            return result;
        } else {
            console.error(`[GoraniStore:getFromLocalStorage]Unexpected type --- ${this.key}`);
            return;
        }
        // switch (this.type) {
        //     case typedef.boolean:
        //         result = parseBool(raw);
        //         break;
        //     case typedef.string:
        //         result = raw;
        //         break;
        //     case typedef.number:
        //         result = Number(raw);
        //         break;
        //     case typedef.object:
        //         result = JSON.parse(raw);
        //         break;
        //     case typedef.array:
        //         result = JSON.parse(raw);
        //         break;
        //     default:
        //         console.error(`[GoraniStore:getFromLocalStorage]Unexpected type --- ${this.key}`);
        //         return;
        // }

        //return result;
    }

    info() {
        const itemInfo = {
            key: this.key,
            type: this.type,
            value: this.value,
        };
        
        return itemInfo;
    }
};

const isValid = ({value, type}) => {
    // Check type
    if (getType(value) != type) {
        return false;
    }

    // Check If given value is not 'NaN'
    if(typeof value === 'number' && isNaN(value)){
        return false;
    }

    // Check If given value is not 'undefined, null'
    const checkList = [undefined, null];
    for (let i = 0; i < checkList.length; i++) {
        if (value === checkList[i]) {
            return false;
        }
    }

    //Passed All checking
    return true;
}

function getType(obj){
    // getClassType : Number, Boolean, String, Object, Array
    return Object.prototype.toString.call(obj).slice(8,-1);
}

export { goraniStore };