import _ from 'lodash';
import { stub } from 'sinon';

function extend(Extended, Base) {


  _.each(Object.keys(Base), (superClassKey) => {
    Extended[superClassKey] = Base[superClassKey];
  });

  _.each(Object.keys(Base.prototype), (protoKey) => {
    Extended.prototype[protoKey] = stub();
  });

  Extended.prototype = _.merge(Extended.prototype, Base.prototype);

}

export default { extend };
