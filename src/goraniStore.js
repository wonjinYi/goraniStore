import { parseBool } from './parseBool.js';

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
        const currentValue = this.get(this.key);
        if (currentValue === null) {
            this.set(item.defaultValue);
        } else {
            this.value = currentValue;
        }
    };

    //methods : set, get, info
    set(newValue) {
        const stringified = String(newValue);

        // Check if the type of new value(you want to save) matches goraniStore Object's.
        // If not, set() can't save new value to this Object
        if (isValid({ value: newValue, type: this.type })) {
            localStorage.setItem(this.key, String(newValue));
            this.value = this.get();
            return this.value;
        } else {
            console.error(`[GoraniStore:set]Types are not matched --- ${this.key}`);
        }


    };

    get() {
        const raw = localStorage.getItem(this.key);
        let result = null;

        switch (this.type) {
            case 'boolean':
                result = parseBool(raw);
                break;
            case 'string':
                result = raw;
                break;
            case 'number':
                result = Number(raw);
                break;
            default:
                console.error(`[GoraniStore:get]Unexpected type --- ${this.key}`);
                return;
        }

        return result;
    };

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
    // Check type.
    if (typeof value != type) {
        return false;
    }

    // Check If given value is not 'NaN, undefined, null'.
    if(typeof value === 'number' && isNaN(value)){
        return false;
    }

    const checkList = [undefined, null];
    for (let i = 0; i < checkList.length; i++) {
        if (value === checkList[i]) {
            return false;
        }
    }

    //Passed All checking.
    return true;
}

export { goraniStore };