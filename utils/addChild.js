function isInstanceOf(child, instance) {
  return child instanceof instance;
}

function addChild(child, destination = [], instances = []) {
  const numOfInstances = instances.length;
  if (numOfInstances) {
    for (let i = 0; i < numOfInstances; i += 1) {
      if (isInstanceOf(child, instances[i])) {
        destination.push(child);
        return;
      }
    }
  } else {
    destination.push(child);
    return;
  }

  console.error('Invalid instance', child, destination);
}

function addChildren(children, destination = [], instances = []) {
  const numOfChildren = children.length;
  const numOfInstances = instances.length;

  if (numOfInstances) {
    for (let i = 0; i < numOfChildren; i += 1) {
      const child = children[i];
      addChild(child, destination, instances);
    }
  } else {
    destination.concat(children);
  }
}

export {
  addChild,
  addChildren,
};
