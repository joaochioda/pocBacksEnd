  
const fs = require('fs');

const joao = []
for (i=0; i< 500; i++) {
    let a = {};
    a.name = 'time '+i;
    a.location = 'sp'+1;
    a.created_at = '2020-08-31T23:29:54.069Z',
    a.updated_at = '2020-08-31T23:29:54.069Z'
    joao.push(a);
}

const obj = JSON.stringify(joao);

const content = joao.map(e => JSON.stringify(e)).join(',\n');
fs.writeFileSync('times.txt', content, 'UTF-8');