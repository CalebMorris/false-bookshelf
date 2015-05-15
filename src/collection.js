import { stub } from 'sinon';

import { extend } from './util';
import { BaseModel } from './base';

function MockCollection() {
  MockCollection.super_.apply(this, arguments);
}

MockCollection.super_ = BaseModel;

MockCollection.prototype = {
  fetchOne : stub(),
  mapThen : stub(),
  reduceThen : stub(),
  invokeThen : stub(),
  add : stub(),
  remove : stub(),
  reset : stub(),
  at : stub(),
  create : stub(),
};

extend(MockCollection, BaseModel);

export default { MockCollection };
