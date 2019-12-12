const NSMap = require('./nsmap.js');

/*
const m = NSMap();


m.set('name', 'name1');

console.log(m.get('name'));
console.log(m.get('ns1:name'));
console.log(m.get('ns1:ns2:name'));

m.set('ns1:name', 'name2');
m.set('ns1:ns2:name', 'name3');

console.log(m.get('name'));
console.log(m.get('ns1:name'));
console.log(m.get('ns1:ns2:name'));
*/




const logOrder = (order) => {
  console.log('John wants', order.get('john:item'));
  console.log('Sara wants', order.get('sara:item'));
  console.log('Raj wants', order.get('raj:item'));
};

const order = NSMap();

order.set('item', 'burger');
order.set('sara:item', 'pasta');
logOrder(order);
