const NSMap = require('../nsmap.js');

describe('NSMap', () => {
  test('Basic functionality', () => {
    const m = new NSMap();

    m.set('name', 'name1');
    m.set('ns1:name', 'name2');

    expect(m.get('name')).toBe('name1');
    expect(m.get('ns1:name')).toBe('name2');
  });

  test("Missing keys don't fail", () => {
    const m = new NSMap();

    expect(m.get('name')).toBe(null);
    expect(m.get('ns1:name')).toBe(null);
  });

  test('Accessing missing namespaced value returns base value', () => {
    const m = new NSMap();

    m.set('name', 'name1');

    expect(m.get('name')).toBe('name1');
    expect(m.get('ns1:name')).toBe('name1');
    expect(m.get('ns1:ns2:name')).toBe('name1');

    m.set('ns1:name', 'name2');
    m.set('ns1:ns2:name', 'name3');

    expect(m.get('name')).toBe('name1');
    expect(m.get('ns1:name')).toBe('name2');
    expect(m.get('ns1:ns2:name')).toBe('name3');
  });
});
