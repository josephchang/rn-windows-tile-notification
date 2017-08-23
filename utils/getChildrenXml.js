function getChildrenXml(children = []) {
  return children.reduce((xml, child) => (
    xml + (child.getXml ? child.getXml() : '')
  ), '');
}

export default getChildrenXml;
