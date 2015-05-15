import _ from 'lodash';
import { stub } from 'sinon';

import { extend } from './util';

function BaseModel() {}

BaseModel.prototype = {
  set : stub(),
  get : stub(),
  fetch : stub(),
  query : stub(),
  load : stub(),

  resetQuery : stub(),
  parse : stub(),
  toJSON : stub(),
};

BaseModel.forge = function() {
  return new this();
};

BaseModel.extend = function(protoProps, classProperties) {

  let ExtendedClass = function() {
    ExtendedClass.super_.apply(this, arguments);

    _.each(ExtendedClass.shims, (shim) => {

      shim.apply(this);

    });

    ExtendedClass.shims = [];
  };

  ExtendedClass.super_ = BaseModel;

  _.each(protoProps, (protoProp, key) => {
    ExtendedClass.prototype[key] = protoProp;
  });

  ExtendedClass.registerShim = function(shim) {
    if (! this.shims) {
      this.shims = [ shim ];
    } else {
      this.shims.push(shim);
    }
  };

  ExtendedClass.reset = function() {

    this.shims = [];
    _.each(Object.keys(ExtendedClass), (methodKey) => {
      ExtendedClass[methodKey] = stub();
    });
    _.each(Object.keys(ExtendedClass.prototype), (protoKey) => {
      ExtendedClass.prototype[protoKey] = stub();
    });

  };

  extend(ExtendedClass, this);

  _.each(classProperties, (classProp, key) => {
    ExtendedClass[key] = classProp;
  });

  return ExtendedClass;

};

export default { BaseModel };
