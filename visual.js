import isValidStringOption from './utils/isValidStringOption';
import getChildrenXml from './utils/getChildrenXml';
import getXmlAttributes from './utils/getXmlAttributes';

import { BRANDING } from './constants';

function Visual(props = {}) {
  this.props = {
    ...props,
  };

  if (!isValidStringOption(props.branding, BRANDING)) {
    delete this.props.branding;
  }

  this.bindings = [];

  return {
    addBinding: (binding) => {
      this.bindings.push(binding);
    },
    addBindings: (bindings) => {
      this.bindings.concat(bindings);
    },
    clearBindings: () => {
      this.bindings = [];
    },
    getXml: () => (
      `<visual${getXmlAttributes(this.props)}>${getChildrenXml(this.bindings)}</visual>`
    ),
  };
}

export default Visual;
