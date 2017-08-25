import getChildrenXml from './utils/getChildrenXml';
import getXmlAttributes from './utils/getXmlAttributes';
import validateProps from './utils/validateProps';
import { addChild, addChildren } from './utils/addChild';
import Image from './image';
import Text from './text';
import {
  TEXTSTACKING,
} from './constants';

function SubGroup(options) {
  const $props = {
    ...options,
  };

  let $children = [];
  const $allowedChildren = [Image, Text];

  const rules = {
    'hint-textStacking': {
      type: Object.keys(TEXTSTACKING),
      onError: () => delete $props['hint-textStacking'],
    },
    'hint-weight': {
      type: 'custom',
      validator: v => v >= 0 && v <= 100,
      onError: () => delete $props['hint-weight'],
    },
  };

  validateProps($props, rules);

  return {
    instance: SubGroup,
    addChild: (child) => {
      addChild(child, $children, $allowedChildren);
    },
    addChildren: (children) => {
      addChildren(children, $children, $allowedChildren);
    },
    clearChildren: () => {
      $children = [];
    },
    getXml: () => (
      `<subgroup${getXmlAttributes($props)}>${getChildrenXml($children)}</subgroup>`
    ),
  };
}

export default SubGroup;
