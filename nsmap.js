function NSMap(parentNSMap) {
  const parent = parentNSMap || null;

  // Initializing object. Native keys live on obj while namespaces live
  // inside the "__NS" key
  const obj = {};
  obj.__NS = {};
  obj.__PARENT = parent;

  // Set a new namespaced variable
  obj.set = (key, val) => {
    const parts = key.split(':');
    const ns = parts[0];
    const rest = parts.slice(1).join(':');

    // Base case
    if (parts.length === 1) {
      obj[parts[0]] = val;
    } else {
      // Recursive step
      if (!(ns in obj.__NS)) {
        obj.__NS[ns] = NSMap(obj);
      }
      obj.__NS[ns].set(rest, val);
    }
  };

  // Get a namespaces variable
  obj.get = (key) => {
    const parts = key.split(':');
    const ns = parts[0];
    const rest = parts.slice(1).join(':');

    // Base care
    if (parts.length === 1) {
      if (key in obj) {
        return obj[key];
      } if (obj.__PARENT) {
        return obj.__PARENT.get(key);
      }
      return null;
    }
    if (!(ns in obj.__NS)) {
      obj.__NS[ns] = NSMap(obj);
    }
    return obj.__NS[ns].get(rest);
  };

  return obj;
}

module.exports = NSMap;
