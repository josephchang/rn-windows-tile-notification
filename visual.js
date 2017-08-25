import validateProps from './utils/validateProps';
import getChildrenXml from './utils/getChildrenXml';
import getXmlAttributes from './utils/getXmlAttributes';
import { addChild, addChildren } from './utils/addChild';
import Binding from './binding';

import { BRANDING } from './constants';

function Visual(options = {}) {
  const $props = {
    ...options,
  };

  let $bindings = [];
  const $allowedChildren = [Binding];

  const rules = {
    version: 'number',
    lang: 'string',
    baseUri: 'string',
    branding: {
      type: Object.keys(BRANDING),
      onError: () => delete $props.branding,
    },
    addImageQuery: 'boolean',
    contentId: 'string',
    displayName: 'string',
  };

  validateProps($props, rules);

  return {
    instance: Visual,
    addBinding: (binding) => {
      addChild(binding, $bindings, $allowedChildren);
    },
    addBindings: (bindings) => {
      addChildren(bindings, $bindings, $allowedChildren);
    },
    clearBindings: () => {
      $bindings = [];
    },
    getXml: () => (
      `<visual${getXmlAttributes($props)}>${getChildrenXml($bindings)}</visual>`
    ),
  };
}

export default Visual;
