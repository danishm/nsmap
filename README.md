Namespaced Maps
=======================

`NSMap` is a simple map implementation with `get()` and `set()` that support namespacing in the key names. 

I came across the need for such a data structure where you might need to override the value of a key for a certain scoped condition BUT have the ability get the default, un-scoped values of the key. The namespace is identified by a `:` before the name. 

Basic Example
-------

Let's say we have a following function to print the lunch oder of 3 friends. `order` is an instance of `NSMap` and you can access the individual "item" someone ordered by their name as a namespace / scope.

```js
const logOrder = (order) => {
  console.log('John wants', order.get('john:item'));
  console.log('Sara wants', order.get('sara:item'));
  console.log('Raj wants', order.get('raj:item'));
};
```

If they all ordered the same thing, you can simply do this

```js
const order = NSMap();
order.set('item', 'burger');
logOrder(order);
```

**Output**

```
John wants burger
Sara wants burger
Raj wants burger
```

Now let's **Sara** changes her mind and wants pasta, you can then simply do

```js
const order = NSMap();
order.set('item', 'burger');
order.set('sara:item', 'pasta'); // setting the value of `item` with a namespcace/scope of `sara`
logOrder(order);
```

**Output**

```
John wants burger
Sara wants pasta
Raj wants burger
```

Multiple Namespace Example
-----------

```js
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
```

**output**

```
name1
name1
name1
name1
name2
name3
```
