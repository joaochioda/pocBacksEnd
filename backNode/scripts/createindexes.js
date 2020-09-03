  
const fs = require('fs');

const joao = []
for (i=0; i< 1000; i++) {
    let a = {};
    a.name = 'joao '+i;
    a.email = 'joao'+i+'@gmail.com';
    a.created_at = '2020-08-31T23:29:54.069Z',
    a.updated_at = '2020-08-31T23:29:54.069Z'
    joao.push(a);
}

const obj = JSON.stringify(joao);

const content = joao.map(e => JSON.stringify(e)).join(',\n');
fs.writeFileSync('joao.txt', content, 'UTF-8');