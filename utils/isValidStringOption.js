function isValidStringOption(value, values = [], allowUndefined = true) {
  if (value === undefined) {
    return allowUndefined;
  } else if (!Array.isArray(values)) {
    return Object.keys(values).indexOf(value) >= 0;
  }

  return values.indexOf(value) >= 0;
}

export default isValidStringOption;
