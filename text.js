import isValidStringOption from './utils/isValidStringOption';
import getXmlAttributes from './utils/getXmlAttributes';
import { TEXTALIGN, TEXTSTYLE } from './constants';

function Text(props = {}) {
  this.props = {
    ...props,
  };

  if (!isValidStringOption(props['hint-style'], TEXTSTYLE)) {
    delete this.props['hint-style'];
  }

  if (!isValidStringOption(props['hint-align'], TEXTALIGN)) {
    delete this.props['hint-style'];
  }

  this.content = '';

  return {
    setContent: (content) => {
      this.content = content;
    },
    getXml: () => (
      `<text${getXmlAttributes(this.props)}>${this.content}</text>`
    ),
  };
}

export default Text;
