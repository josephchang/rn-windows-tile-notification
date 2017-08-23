import isValidStringOption from './utils/isValidStringOption';
import getXmlAttributes from './utils/getXmlAttributes';
import { IMAGEALIGN, IMAGECROP, IMAGEPLACEMENT} from './constants';

function Image(props = {}) {
  this.props = {
    ...props,
  };

  if (!isValidStringOption(props['hint-align'], IMAGEALIGN)) {
    delete this.props['hint-align'];
  }

  if (!isValidStringOption(props['hint-crop'], IMAGECROP)) {
    delete this.props['hint-crop'];
  }

  if (!isValidStringOption(props.placement, IMAGEPLACEMENT)) {
    delete this.props.placement;
  }

  return {
    getXml: () => (
      `<image${getXmlAttributes(this.props)} />`
    ),
  };
}

export default Image;
