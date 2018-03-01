NSMap - Namespaced Maps
=======================

`NSMap` is a simple map implementation with `get()` and `set()` that support namespacing and overloading of values

Example
-------

```
const m = NSMap();

m.add('name', 'name1');

expect(m.get('name')).toBe('name1');
expect(m.get('ns1:ns2:name')).toBe('name1');

m.add('ns1:ns2:name', 'name2');

expect(m.get('name')).toBe('name1');
expect(m.get('ns1:ns2:name')).toBe('name2');
```

