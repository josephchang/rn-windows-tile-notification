import { describe, it } from 'mocha';
import { expect } from 'chai';
import getXmlAttributes from '../utils/getXmlAttributes';
import getChildrenXml from '../utils/getChildrenXml';
import isValidStringOption from '../utils/isValidStringOption';

describe('utils', () => {
  describe('getChildrenXml', () => {
    const grandchild = {
      getXml: () => (
        '<grandchild>Bob</grandchild>'
      ),
    };

    const child = {
      getXml: () => (
        `<child>${getChildrenXml([grandchild])}</child>`
      ),
    };

    it('should get xml of children', () => {
      expect(getChildrenXml([child])).to.be.equal('<child><grandchild>Bob</grandchild></child>');
    });
  });

  describe('getXmlAttribute', () => {
    describe('GIVEN there are properties', () => {
      const props = {
        name: 'Joe',
        age: 30,
        isAdmin: false,
        empty: undefined,
      };

      it('should stringify the properties as xml attributes', () => {
        expect(getXmlAttributes(props)).to.be.equal(' name="Joe" age="30" isAdmin="false"');
      });
    });

    describe('GIVEN there are NO properties', () => {
      const props = {};
      it('should be empty', () => {
        expect(getXmlAttributes(props)).to.be.equal('');
      });
    });
  });

  describe('isValidStringOption', () => {
    describe('GIVEN an object of options', () => {
      const opts = {
        option1: 'option1',
        option2: 'option2',
      };

      it('should return `true` if option is in the list', () => {
        expect(isValidStringOption('option1', opts)).to.be.equal(true);
      });

      it('should return `false` if option is NOT in the list', () => {
        expect(isValidStringOption('not in list', opts)).to.be.equal(false);
      });

      describe('GIVEN `undefined` option is allowed', () => {
        it('should return `true` when option is undefined', () => {
          expect(isValidStringOption(undefined, opts)).to.be.equal(true);
        });
      });

      describe('GIVEN `undefined` option is NOT allowed', () => {
        it('should return `false` is undefined', () => {
          expect(isValidStringOption(undefined, opts, false)).to.be.equal(false);
        });
      });
    });

    describe('GIVEN an array of options', () => {
      const opts = ['optionA', 'optionB'];

      it('should return `true` if option is in the list', () => {
        expect(isValidStringOption('optionB', opts)).to.be.equal(true);
      });

      it('should return `false` if option is NOT in the list', () => {
        expect(isValidStringOption('not in list', opts)).to.be.equal(false);
      });

      describe('GIVEN `undefined` option is allowed', () => {
        it('should return `true` when option is undefined', () => {
          expect(isValidStringOption(undefined, opts)).to.be.equal(true);
        });
      });

      describe('GIVEN `undefined` option is NOT allowed', () => {
        it('should return `false` is undefined', () => {
          expect(isValidStringOption(undefined, opts, false)).to.be.equal(false);
        });
      });
    });
  });
});
