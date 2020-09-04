const fs = require('fs');

let objeto = {"key": {"path": 
[{"id": "5714489739575296", "kind": "user"}]},
 "properties": 
 {
    "age": {"excludeFromIndexes": false, "integerValue": "100"}, 
 "name": {"excludeFromIndexes": false, "stringValue": "guilherme"}
 }
};


const joao = []

for (let i=0;i<2000;i++) {
    let newObjeto = {"key": {"path": 
    [{"id": i+1, "kind": "user"}]},
     "properties": 
     {
        "age": {"excludeFromIndexes": false, "integerValue": "100"}, 
     "name": {"excludeFromIndexes": false, "stringValue": "guilherme"+i}
     }
    };
    joao.push(newObjeto);
}

const content = joao.map(e => JSON.stringify(e)).join(',\n');
fs.writeFileSync('joao.txt', content, 'UTF-8');