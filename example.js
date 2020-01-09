const NSMap = require('./nsmap.js');

const logOrder = (order) => {
  console.log('John wants', order.get('john:item'));
  console.log('Sara wants', order.get('sara:item'));
  console.log('Raj wants', order.get('raj:item'));
};

const order = new NSMap();

order.set('item', 'burger');
order.set('sara:item', 'pasta');
logOrder(order);
