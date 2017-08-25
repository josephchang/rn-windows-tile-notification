import getChildrenXml from './utils/getChildrenXml';
import getXmlAttributes from './utils/getXmlAttributes';
import { addChild, addChildren } from './utils/addChild';
import Image from './image';
import Text from './text';
import Group from './group';

import {
  BRANDING,
  TEXTSTACKING,
  TILETEMPLATENAMEV1,
  TILETEMPLATENAMEV3,
} from './constants';
import validateProps from './utils/validateProps';

function Binding(options = {}) {
  const $props = {
    ...options,
  };

  let $children = [];
  const $allowedChildren = [Image, Text];

  const rules = {
    template: {
      required: true,
      type: Object.keys(TILETEMPLATENAMEV3),
      onError: () => delete $props.template,
    },
    fallback: {
      type: Object.keys(TILETEMPLATENAMEV1),
      onError: () => delete $props.fallback,
    },
    lang: 'string',
    baseUri: 'string',
    branding: {
      type: Object.keys(BRANDING),
      onError: () => delete $props.branding,
    },
    addImageQuery: 'boolean',
    contentId: 'string',
    displayName: 'string',
    'hint-textStacking': {
      type: Object.keys(TEXTSTACKING),
      onError: () => delete $props['hint-textStacking'],
    },
    'hint-overlay': {
      type: 'custom',
      validator: v => v >= 0 && v <= 100,
      onError: () => delete $props['hint-overlay'],
    },
  };

  validateProps($props, rules);

  return {
    instance: Binding,
    addChild: (child) => {
      addChild(child, $children, $allowedChildren);
    },
    addChildren: (children) => {
      addChildren(children, $children, $allowedChildren);
    },
    removeChildren: () => {
      $children = [];
    },
    addGroup: (group) => {
      addChild(group, $children, [Group]);
    },
    getXml: () => (
      `<binding${getXmlAttributes($props)}>${getChildrenXml($children)}</binding>`
    ),
  };
}

export default Binding;
