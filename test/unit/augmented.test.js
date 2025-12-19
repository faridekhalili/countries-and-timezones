import buildCountry from '../../src/build-country';

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
});