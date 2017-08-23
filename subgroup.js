import getChildrenXml from './utils/getChildrenXml';
import getXmlAttributes from './utils/getXmlAttributes';
import isValidStringOption from './utils/isValidStringOption';

import {
  TEXTSTACKING,
} from './constants';

function SubGroup(props) {
  this.props = {
    ...props,
  };

  if (!isValidStringOption(props['hint-textStacking'], TEXTSTACKING)) {
    delete this.props['hint-textStacking'];
  }

  this.children = [];
  return {
    addChild: (child) => {
      this.children.push(child);
    },
    clearChildren: () => {
      this.children = [];
    },
    getXml: () => (
      `<subgroup${getXmlAttributes(this.props)}>${getChildrenXml(this.children)}</subgroup>`
    ),
  };
}

export default SubGroup;
