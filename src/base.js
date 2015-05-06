import _ from 'lodash';
import { inherits } from 'util';
import { stub } from 'sinon';

class BaseModel {

  constructor(attributes, options) {

    this.set = stub();
    this.get = stub();
    this.fetch = stub();
    this.query = stub();
    this.load = stub();

    this.parse = stub();
    this.toJSON = stub();

  }

  static forge() {
    return new this();
  }

  static extend(protoProps, classProperties) {

    let ExtendedClass = class extends this {
      constructor() {
        _.each(protoProps, (protoProp, key) => {
          this[key] = protoProp;
        });
      }
    };

    _.each(classProperties, (classProp, key) => {
      ExtendedClass[key] = classProp;
    });

    return ExtendedClass;

  }

}

export default { BaseModel };
