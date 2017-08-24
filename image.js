import getXmlAttributes from './utils/getXmlAttributes';
import validateProps from './utils/validateProps';
import { IMAGEALIGN, IMAGECROP, IMAGEPLACEMENT } from './constants';

function Image(options = {}) {
  const $props = {
    ...options,
  };

  const rules = {
    src: 'string',
    placement: {
      type: Object.keys(IMAGEPLACEMENT),
      onError: () => delete $props.placement,
    },
    alt: 'string',
    addImageQuery: 'boolean',
    'hint-crop': {
      type: Object.keys(IMAGECROP),
      onError: () => delete $props['hint-crop'],
    },
    'hint-removeMargin': 'boolean',
    'hint-align': {
      type: Object.keys(IMAGEALIGN),
      onError: () => delete $props['hint-align'],
    },
  };

  validateProps($props, rules);

  return {
    getXml: () => (
      `<image${getXmlAttributes($props)} />`
    ),
  };
}

export default Image;
