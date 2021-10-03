//import sampleJson from './sample.json' assert { type: "json" };
import { goraniStore } from '../src/goraniStore.js';
import { parseBool } from '../src/parseBool.js';

const sampleJson = {
    "item_1": {
        "key": "GoraniStore_Sample_key(1)",
        "defaultValue": true,
        "type": "boolean"
    },
    "item_2": {
        "key": "GoraniStore_Sample_key(2)",
        "defaultValue": 10,
        "type": "number"
    },
    "item_3": {
        "key": "GoraniStore_Sample_key(3)",
        "defaultValue": "store",
        "type": "string"
    }
}

const boolGorani = new goraniStore(sampleJson.item_1);
const numGorani = new goraniStore(sampleJson.item_2);
const strGorani = new goraniStore(sampleJson.item_3);

console.log(boolGorani.info());
console.log(numGorani.info());
console.log(strGorani.info());

///////////////////////////////////////

const $boolValue = document.getElementById('boolValue');
const $numValue = document.getElementById('numValue');
const $strValue = document.getElementById('strValue');

const $boolInput = document.getElementById('boolInput');
const $numInput = document.getElementById('numInput');
const $strInput = document.getElementById('strInput');

const $boolBtn = document.getElementById('boolBtn');
const $numBtn = document.getElementById('numBtn');
const $strBtn = document.getElementById('strBtn');

const updateValues = () => {
    $boolValue.textContent = boolGorani.get();
    $numValue.textContent = numGorani.get();
    $strValue.textContent = strGorani.get();
}

const handleChange = (e) => {
    const btnName = e.target.getAttribute('id');

    if(btnName==='boolBtn'){
        boolGorani.set(parseBool($boolInput.value));
    } else if(btnName==='numBtn'){
        numGorani.set(Number($numInput.value));
    } else if(btnName==='strBtn'){
        strGorani.set($strInput.value);
    } else {
        console.error("[GoraniStore-Sample]Unexpected");
        return;
    }

    updateValues();
}

///////////////////////////////////////

updateValues();

$boolBtn.onclick = handleChange;
$numBtn.onclick = handleChange;
$strBtn.onclick = handleChange;