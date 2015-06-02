dumpObjectMethods = function(obj, includePrototype) {
  var keys = Object.keys(obj);
  var ret = {};
  _.each(keys, function(key, idx) {
    if (obj[key]) {
      ret[key] = obj[key].toString();
    }
  });

  if (includePrototype === true) {
    if (obj.prototype) {
      _.extend(ret, dumpObjectMethods(obj.prototype, includePrototype));
    }
    if (obj.__proto__) {
      _.extend(ret, dumpObjectMethods(obj.__proto__, includePrototype));
    }
  }
  return ret;
};
