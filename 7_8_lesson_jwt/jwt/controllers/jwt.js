const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: '1234', name: 'Dima'}, 'secret');
console.log('token', token);

const user = jwt.decode(token);
console.log('user', user);

const user2 = jwt.verify(token, 'secrt');
console.log('user2', user2);