import _ from 'lodash';
import { inherits } from 'util';

function extend(Extended, Base) {

  _.each(Object.keys(Base), (superPropKey) => {
    Extended[superPropKey] = Base[superPropKey];
  });

  Extended.prototype = _.merge(Extended.prototype, Base.prototype);

  inherits(Extended, Base);

}

export default { extend };
