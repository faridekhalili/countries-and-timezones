import buildCountry from '../../src/build-country';
import { getAllTimezones, getTimezonesForCountry } from '../../src/index';

describe('Augmented tests', () => {

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

});