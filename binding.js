import isValidStringOption from './utils/isValidStringOption';
import getChildrenXml from './utils/getChildrenXml';
import getXmlAttributes from './utils/getXmlAttributes';

import {
  BRANDING,
  TEXTSTACKING,
  TILETEMPLATENAMEV1,
  TILETEMPLATENAMEV3,
} from './constants';

function Binding(props = {}) {
  this.props = {
    ...props,
  };

  if (!isValidStringOption(props.branding, BRANDING)) {
    delete this.props.branding;
  }

  if (!isValidStringOption(props['hint-textStacking'], TEXTSTACKING)) {
    delete this.props['hint-textStacking'];
  }

  if (!isValidStringOption(props.template, TILETEMPLATENAMEV3)) {
    delete this.props.template;
  }

  if (!isValidStringOption(props.fallback, TILETEMPLATENAMEV1)) {
    delete this.props.fallback;
  }

  this.children = [];

  return {
    addChild: (child) => {
      this.children.push(child);
    },
    removeChildren: () => {
      this.children = [];
    },
    addGroup: (group) => {
      this.children = [group];
    },
    getXml: () => (
      `<binding${getXmlAttributes(this.props)}>${getChildrenXml(this.children)}</binding>`
    ),
  };
}

export default Binding;
