var object = {key: value};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, {key: value})
  return Object.assign({},object)
}
