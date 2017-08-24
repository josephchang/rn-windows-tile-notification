import isValidStringOption from './isValidStringOption';

function onPropError(callback, propName, propValue) {
  if (typeof callback === 'function') {
    callback(propValue, propName);
  }
}

function validateProps(props = {}, rules = {}) {
  const propsToValidate = Object.keys(props);
  const requiredProps = Object.keys(rules).filter(r => rules[r].required);
  let isValid = true;

  requiredProps.forEach((p) => {
    const propValue = props[p];
    if (propValue === undefined) {
      console.error(`Required props '${p}' is undefined`);
      isValid = false;
      onPropError(rules[p].onError, p, propValue);
    }
  });

  propsToValidate.forEach((p) => {
    const propValue = props[p];
    const propType = typeof propValue;
    const rule = rules[p];

    if (typeof rule === 'string' && propType !== rule) {
      console.error(`${p} (${propType}) is not of type ${rule}`);
      isValid = false;
      return;
    }

    const {
      type: ruleType,
      validator,
      onError,
    } = rule;

    if (Array.isArray(ruleType)) {
      if (!isValidStringOption(propValue, ruleType)) {
        console.error(`${p} (${propValue}) is not in ${ruleType.join(',')}`);
        isValid = false;
        onPropError(onError, p, propValue);
      }
    } else if (ruleType !== 'custom' && propType !== ruleType) {
      console.error(`${p} (${propType}) is not of type ${ruleType}`);
      isValid = false;
      onPropError(onError, p, propValue);
    } else if (ruleType === 'custom' && typeof validator === 'function') {
      const valid = validator(propValue);
      if (!valid) {
        console.error(`${p} (${propValue}) is not valid`);
        isValid = false;
        onPropError(onError, p, propValue);
      }
    }
  });

  return isValid;
}

export default validateProps;
