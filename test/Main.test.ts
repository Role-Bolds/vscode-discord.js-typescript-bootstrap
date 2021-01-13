import "mocha";
import 'chai/register-should'
import { config } from '../src/Main';
import { expect } from "chai";


describe("-- Main.ts", () => {
  describe("Config", () => {
    it('should be access-able', () => {
      config.should.be.a('object');
    });
    describe('expect to have:', () => {
      it('prefix', () => {
        expect(config).to.have.property('prefix').be.a('array');
      });
      it('token', () => {
        expect(config).to.have.property('token').be.a('string');
      });
      it('debug', () => {
        expect(config).to.have.property('debug').be.a('boolean');
      });
    });
  });
});