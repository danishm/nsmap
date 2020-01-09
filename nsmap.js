function NSMap(parent) {
  this.parent = parent || null;
  this.data = new Map();
  this.namespaces = new Map();
}

NSMap.prototype.set = function set(key, val) {
  const parts = key.split(':');
  const ns = parts[0];
  const rest = parts.slice(1).join(':');

  // Base case
  if (parts.length === 1) {
    this.data.set(parts[0], val);
  } else {
    // Recursive step
    if (!(ns in this.namespaces)) {
      this.namespaces[ns] = new NSMap(this);
    }
    this.namespaces[ns].set(rest, val);
  }
};

NSMap.prototype.get = function get(key) {
  const parts = key.split(':');
  const ns = parts[0];
  const rest = parts.slice(1).join(':');

  // Base case i.e. no namespace specified
  if (parts.length === 1) {
    if (this.data.has(key)) {
      return this.data.get(key);
    }
    if (this.parent) {
      return this.parent.get(key);
    }
    return null;
  }
  if (!(ns in this.namespaces)) {
    this.namespaces[ns] = new NSMap(this);
  }
  return this.namespaces[ns].get(rest);
};

module.exports = NSMap;
