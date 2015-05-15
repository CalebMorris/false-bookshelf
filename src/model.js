import { stub } from 'sinon';

import { extend } from './util';
import { BaseModel } from './base';
import { NotFoundError } from './errors'

function MockModel() {
  MockModel.super_.apply(this, arguments);
}

MockModel.super_ = BaseModel;

MockModel.prototype = {
  fetchAll : stub(),
  where : stub(),

  related : stub(),
  relatedData : stub(),
  save : stub(),
  destroy : stub(),
  format : stub(),
}

MockModel.NotFoundError = NotFoundError;

extend(MockModel, BaseModel);

export default { MockModel };
