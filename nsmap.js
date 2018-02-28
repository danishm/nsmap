function NSMap(parent) {
    parent = parent || null;

    // Initializing object. Native keys live on obj while namespaces live
    // insite the "__NS" key
    var obj = {};
    obj["__NS"] = {};
    obj["__PARENT"] = parent;

    // Add a new namespaced variable
    obj.add = function(key, val) {
        var parts = key.split(":");
        var ns = parts[0];
        var rest = parts.slice(1).join(":");

        // Base case
        if (parts.length == 1) {
            obj[parts[0]] = val;
        }
        // Recursive step
        else {
            if (!(ns in obj["__NS"])) {
                obj["__NS"][ns] = NSMap(obj);
            }
            obj["__NS"][ns].add(rest, val);
        }
    };

    // Get a namespaces variable
    obj.get = function(key) {
        var parts = key.split(":");
        var ns = parts[0];
        var rest = parts.slice(1).join(":");

        // Base care
        if (parts.length == 1) {
            if (key in obj) {
                return obj[key];
            } else if (obj["__PARENT"]) {
                return obj["__PARENT"].get(key);
            }
        } else {
            if (!(ns in obj["__NS"])) {
                obj["__NS"][ns] = NSMap(obj);
            }
            return obj["__NS"][ns].get(rest);
        }
    };

    return obj;
}

module.exports = NSMap;