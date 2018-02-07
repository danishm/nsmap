'use strict'

const NSMap = require('../nsmap.js');

describe('NSMap', () => {
    test('Basic functionality', () => {
        const m = NSMap();

        m.add('name', 'danish');

        expect(m.get('name')).toBe('danish');
    });
});