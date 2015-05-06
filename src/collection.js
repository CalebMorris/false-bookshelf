import { stub } from 'sinon';

import { BaseModel } from './base';

class MockCollection extends BaseModel {

  constructor(attributes, options) {

    super();

    this.fetchOne = stub();
    this.mapThen = stub();
    this.reduceThen = stub();
    this.invokeThen = stub();
    this.add = stub();
    this.remove = stub();
    this.reset = stub();
    this.at = stub();
    this.create = stub();

  }

}

export default { MockCollection };
