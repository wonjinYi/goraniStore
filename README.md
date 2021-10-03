# goraniStore
**고라니와 함께하는 즐거운 localStorage생활**

![deer](./sample/deer.png)

![mit](https://img.shields.io/github/license/wonjinYi/goraniStore)


**goraniStore**는 javascript에서 localStorage를 보다 더 편리하게 사용할 수 있도록 돕는 가벼운 프로그램입니다.
직접 localStorage를 다루는 대신 이름부터 귀여운 **goraniStore 객체**를 사용합니다.

goraniStore를 활용한 예제는 [여기](https://wonjinyi.github.io/goraniStore/sample/sample.html)에서 확인하실 수 있습니다.

## 한 눈에 보는 코드 예제
```js
import { goraniStore } from './goraniStore.js';

const storeList = {
    "item_1": {
        "key": "GoraniStore_Sample_boolean",
        "defaultValue": true,
        "type": "boolean"
    }, 
    "item_2" : {
        "key": "GoraniStore_Sample_Number",
        "defaultValue" : 53,
        "type": "number"
    }
};

const boolGorani = new goraniStore(storeList.item_1);
const numGorani = new goraniStore(storeList.item_2);
console.log(boolGorani.get()); // true
console.log(numGorani.get()); // 53

boolGorani.set(false);
numGorani.set(5353);
console.log(boolGorani.get()); // false
console.log(numGorani.set()); // 5353

console.log(boolGorani.info());
// {
//     key : "GoraniStore_Sample_boolean",
//     type : "boolean",
//     value : false
// }
```



## 세부 기능설명
### source json
```json
storeList = {
    "item_1": {
        "key": "GoraniStore_Sample_num",
        "defaultValue": 53,
        "type": "number"
    }
}
```

goraniStore를 사용하려면 우선, localStorage에 등록할 아이템들의 정보를 입력해야합니다. 
이 정보는 새로운 goraniStore객체를 생성하고 초기화하는 데에 사용됩니다.

들어가야하는 내용은 localStorage에서 사용할 key의 이름, 기본값 , 그리고 자료형입니다.
자료형은 아래 세 가지 가운데에서 고를 수 있습니다.
* number
* string
* boolean


### constructor
```js
const newItem = new goraniStore(storeList.item_1);
```
이 프로그램의 사용은 goraniStore객체를 생성하는 것으로 시작합니다.
앞서 정리해둔 source json(``storeList``)의 한 아이템을 골라 생성자로 전달합니다.


### properties

변수 ``newItem``에 goraniStore객체를 생성하고 뒤이어 생성자가 동작하고 나면, ``newItem``은 세 가지의 property를 갖게 됩니다.
* key
* type
* value

**key**와 **type**은 객체 생성시 전달한 object (``storeList.item_1``)의 내용을 그대로 따릅니다. 

**value**는 해당 goraniStore객체가 갖는 진정한 의미의 값입니다. 만약 객체 생성이전에 이미 localStorage에 key에 해당하는 데이터가 존재했다면, 그 데이터를 불러와 value에 저장합니다. 
존재하지 않았다면, 생성자에 전달한 defaultValue가 value에 저장됩니다.

이 세 가지의 값을 확인하려면 ``info()`` method를 사용할 수 있습니다.

### method
goraniStore객체는 세 가지의 method를 제공합니다.
##### get()
* 설명 : 해당 객체의 value 프로퍼티를 얻습니다.
* 인수 : (없음)
* 반환값 : value property

##### set(newValue)
* 설명
    *  해당 객체의 key에 해당하는 localStorage Item의 값을 newValue로 바꿉니다.
    * 그 다음, 해당 객체의 value를 바뀐 값(newValue)으로 갱신합니다.
* 인수 : newValue (변경하고자 하는 값)
* 반환값 : 갱신된 value property

##### info()
* 설명 : 해당 객체의 세 프로퍼티를 담은 object를 얻습니다.
* 인수 : (없음)
* 반환값 : object
``` js
{
    key : this.key
    type : this.type,
    value : this.value,
}
```

## 도움받은 곳
<div>deer Icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>