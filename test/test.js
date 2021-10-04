//import { goraniStore } from 'https://cdn.jsdelivr.net/gh/wonjinYi/goraniStore@dev/src/goraniStore.js';
import { goraniStore } from './temp_goranistore/temp_goranistore.js';
import { parseBool } from './parseBool.js';

const sampleJson = {
    "item_1": {
        "key": "GoraniStore_Sample_key(1)",
        "defaultValue": true,
        "type": "Boolean"
    },
    "item_2": {
        "key": "GoraniStore_Sample_key(2)",
        "defaultValue": 10,
        "type": "Number"
    },
    "item_3": {
        "key": "GoraniStore_Sample_key(3)",
        "defaultValue": "store",
        "type": "String"
    },
    "item_4": {
        "key": "GoraniStore_Sample_key(4)",
        "defaultValue": {a:5, b:3, c:53},
        "type": "Object"
    },
    "item_5": {
        "key": "GoraniStore_Sample_key(5)",
        "defaultValue": [5,3,53,5353],
        "type": "Array"
    }
}

const boolGorani = new goraniStore(sampleJson.item_1);
const numGorani = new goraniStore(sampleJson.item_2);
const strGorani = new goraniStore(sampleJson.item_3);
const objGorani = new goraniStore(sampleJson.item_4);
const arrGorani = new goraniStore(sampleJson.item_5);

console.log(boolGorani.info());
console.log(numGorani.info());
console.log(strGorani.info());
console.log(objGorani.info());
console.log(arrGorani.info());

///////////////////////////////////////

const $boolValue = document.getElementById('boolValue');
const $numValue = document.getElementById('numValue');
const $strValue = document.getElementById('strValue');
const $objValue = document.getElementById('objValue');
const $arrValue = document.getElementById('arrValue');

const $boolInput = document.getElementById('boolInput');
const $numInput = document.getElementById('numInput');
const $strInput = document.getElementById('strInput');
const $objInput = document.getElementById('objInput');
const $arrInput = document.getElementById('arrInput');

const $boolBtn = document.getElementById('boolBtn');
const $numBtn = document.getElementById('numBtn');
const $strBtn = document.getElementById('strBtn');
const $objBtn = document.getElementById('objBtn');
const $arrBtn = document.getElementById('arrBtn');

const updateValues = () => {
    $boolValue.textContent = boolGorani.get();
    $numValue.textContent = numGorani.get();
    $strValue.textContent = strGorani.get();
    $objValue.textContent = JSON.stringify(objGorani.get());
    $arrValue.textContent = JSON.stringify(arrGorani.get());
}

const handleChange = (e) => {
    const btnName = e.target.getAttribute('id');

    if(btnName==='boolBtn'){
        boolGorani.set(parseBool($boolInput.value));
    } else if(btnName==='numBtn'){
        numGorani.set(Number($numInput.value));
    } else if(btnName==='strBtn'){
        strGorani.set($strInput.value);
    } else if(btnName==='objBtn'){
        objGorani.set(JSON.parse($objInput.value));
    } else if(btnName==='arrBtn'){
        arrGorani.set(JSON.parse($arrInput.value));
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
$objBtn.onclick = handleChange;
$arrBtn.onclick = handleChange;