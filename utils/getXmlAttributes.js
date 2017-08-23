function getXmlAttributes(props = {}) {
  return Object.keys(props).reduce((attrs, prop) => (
    `${attrs}${(props[prop] !== undefined) ? ` ${prop}="${props[prop]}"` : ''}`
  ), '');
}

export default getXmlAttributes;
