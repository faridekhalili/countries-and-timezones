import buildCountry from '../../src/build-country';
import { getAllTimezones, getTimezonesForCountry } from '../../src/index';

describe('Augmented tests', () => {

    it('Sample 6', () => {
        /**
         * ArrayDeclaration
         * src/build-country.js:12:33
         * -       timezones: tzMap.current || [],
         * +       timezones: tzMap.current || [\"Stryker was here\"]
         */
        const emptyTimezoneMap = { countries: { 'foo-country': 'bar' }, timezones: {} }
        const country = buildCountry(emptyTimezoneMap, 'foo-country')
        expect(country.timezones).toEqual([])
    });
});