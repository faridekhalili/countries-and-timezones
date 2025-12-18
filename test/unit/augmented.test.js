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
        expect(country.allTimezones).deep.to.be.equal([])
    });

    // // Equivalent mutant. If condition is true, fills cache. If condition false, pulls from cache.
    // // Thus, mutant just makes the program do extra work, but has an equivalent end state.
    // it('Sample 2', () => {
    //     /**
    //      * ConditionalExpression
    //      * src/index.js:17:7
    //      * -     if (totalTimezones !== memoizedTimezones) Object.keys(data.timezones).forEach(getTimezone);
    //      * +     if (true) Object.keys(data.timezones).forEach(getTimezone);
    //      */
    //     const expected = require('./output.json');
    //     // Get all timezones once so that they are all memoized
    //     getAllTimezones()
    //     // Then get all timezones again now that totalTimezones === memoziedTimezones.
    //     expect(JSON.stringify(getAllTimezones())).to.be.equal(
    //         JSON.stringify(expected)
    //     )
    // });

    // it('Sample 3', () => {
    //     /**
    //      * ConditionalExpression
    //      * src/build-country.js:18:7
    //      * -     if (!timezonesMap) timezonesMap = buildTimezonesMap(data);
    //      * +     if (true) timezonesMap = buildTimezonesMap(data);
    //      */
    //     // Equivalent mutant. timezones map is always truthy.
    // });

    // ABANDONED. Too complex.
    // it('Sample 4', () => {
    //     /**
    //      * ArrayDeclaration
    //      * src/index.js:56:39
    //      * -     const values = country.timezones || [];
    //      * +     const values = country.timezones || [\"Stryker was here\"];
    //      */
    //     const data = {}
    //     data.countries = {'id': 'my-id' , 'my-country': true, 'timezones': {'my-timezone': 'my-tz'}}
    //     const myCountry = buildCountry(data, 'my-country')
    //     console.log(myCountry)
    //     // expect(myCountry.id).to.equal('my-country')
    // });

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
        expect(index.default).to.be.an('object');
        expect(index.default.getCountry).to.be.a('function');
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
        expect(country.timezones).deep.to.be.equal([])
    });
});