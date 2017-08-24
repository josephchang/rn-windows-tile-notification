import escapeXml from './utils/escapeXml';
import getXmlAttributes from './utils/getXmlAttributes';
import validateProps from './utils/validateProps';
import { TEXTALIGN, TEXTSTYLE } from './constants';

/*
lang? = string
  hint-style? = textStyle
  hint-wrap? = boolean
  hint-maxLines? = integer
  hint-minLines? = integer
  hint-align? = "left" | "center" | "right" >
 */
function Text(options = {}) {
  const $props = {
    ...options,
  };
  let $content = '';

  const rules = {
    lang: 'string',
    'hint-style': {
      type: Object.keys(TEXTSTYLE),
      onError: () => delete $props['hint-style'],
    },
    'hint-wrap': 'boolean',
    'hint-maxLines': 'number',
    'hint-minLines': 'number',
    'hint-align': {
      type: Object.keys(TEXTALIGN),
      onError: () => delete $props['hint-align'],
    },
  };

  validateProps($props, rules);

  return {
    setContent: (content) => {
      $content = content;
    },
    getXml: () => (
      `<text${getXmlAttributes($props)}>${escapeXml($content)}</text>`
    ),
  };
}

export default Text;
