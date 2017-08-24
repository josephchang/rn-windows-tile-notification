import escapeXml from './escapeXml';

function getXmlAttributes(props = {}) {
  return Object.keys(props).reduce((attrs, prop) => (
    `${attrs}${(props[prop] !== undefined) ? ` ${prop}="${escapeXml(props[prop])}"` : ''}`
  ), '');
}

export default getXmlAttributes;
