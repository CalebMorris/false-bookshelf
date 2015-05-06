import { stub } from 'sinon';

import { MockCollection } from './collection';
import { MockModel } from './model';

class FalseBookshelf {

  constructor() {

    this.Model = MockModel;
    this.Collection = MockCollection;

    this.model = stub();
    this.collection = stub();

  }

  static forge() {
    return new FalseBookshelf();
  }

}

export default { FalseBookshelf };
