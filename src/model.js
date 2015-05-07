import { stub } from 'sinon';

import { BaseModel } from './base';
import { NotFoundError } from './errors'

class MockModel extends BaseModel {

  constructor(attributes, options) {

    super();

    this.fetchAll = stub();
    this.where = stub();

    this.related = stub();
    this.relatedData = stub();
    this.save = stub();
    this.destroy = stub();
    this.format = stub();

  }

}

MockModel.NotFoundError = NotFoundError;

export default { MockModel };
