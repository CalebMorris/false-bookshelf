import { stub } from 'sinon';

import { extend } from './util';
import { BaseModel } from './base';
import { NotFoundError } from './errors'

function MockModel() {
  MockModel.super_.apply(this, arguments);

  this.fetchAll = stub();
  this.where = stub();

  this.related = stub();
  this.relatedData = stub();
  this.save = stub();
  this.destroy = stub();
  this.format = stub();
}

MockModel.NotFoundError = NotFoundError;

extend(MockModel, BaseModel);

export default { MockModel };
