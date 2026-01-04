import buildCountry from '../../src/build-country';
import { getAllTimezones, getTimezonesForCountry } from '../../src/index';

describe('Augmented tests', () => {

    it('Sample 1', () => {
        /**
         * ArrayDeclaration
         * src/build-country.js:13:32
         * -       allTimezones: tzMap.all || [],
         * +       allTimezones: tzMap.all || [\"Stryker was here\"],
         */
        const emptyTimezoneMap = { countries: { 'foo-country': 'bar' }, timezones: {} }
        const country = buildCountry(emptyTimezoneMap, 'foo-country')
        expect(country.allTimezones).toEqual([])
    });

    it('Sample 5', () => {
        /**
         * ObjectLiteral
         * src/index.js:77:16
         * -   export default {
         * -     getCountry,
         * -     getTimezone,
         * -     getAllCountries,
         * -     getAllTimezones,
         * -     getTimezonesForCountry,
         * -     getCountriesForTimezone,
         * -     getCountryForTimezone,
         * -   };
         * +   export default {};
         */
        const index = require('../../src/index');
        expect(Object.keys(index.default).length).toBe(7)
    })

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
