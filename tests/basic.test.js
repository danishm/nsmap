'use strict'

const NSMap = require('../nsmap.js');

describe('NSMap', () => {
    test('Basic functionality', () => {
        const m = NSMap();

        m.add('name', 'name1');
        m.add('ns1:name', 'name2')

        expect(m.get('name')).toBe('name1');
        expect(m.get('ns1:name')).toBe('name2');
    });

    test("Missing keys don't fail", () => {
        const m = NSMap();

        expect(m.get('name')).toBe(undefined);
        expect(m.get('ns1:name')).toBe(undefined);
    });

    test("Accessing missing namespaced value returns base value", () => {
        const m = NSMap();

        m.add('name', 'name1');

        expect(m.get('name')).toBe('name1');
        expect(m.get('ns1:ns2:name')).toBe('name1');

        m.add('ns1:ns2:name', 'name2');

        expect(m.get('name')).toBe('name1');
        expect(m.get('ns1:ns2:name')).toBe('name2');
    })
});