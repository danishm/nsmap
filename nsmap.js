function NSMap() {

    // Initializing object. Native keys live on obj while namespaces live
    // insite the "__NS" key
    var obj = {}
    obj["__NS"] = {}

    // Add a new namespaced variable
    obj.add = function(key, val) {
        var parts = key.split(":");
        var ns = parts[0];
        var rest = parts.slice(1).join(":")

        // Base case
        if (parts.length == 1) {
            obj[parts[0]] = val;
        }
        // Recursive step
        else {
            if (!(ns in obj["__NS"])) {
                obj["__NS"][ns] = NSMap();
            }
            obj["__NS"][ns].add(rest, val);
        }
    }

    // Get a namespaces variable
    obj.get = function(key) {
        var parts = key.split(":");
        var ns = parts[0];
        var rest = parts.slice(1).join(":")

        // Base care
        if (parts.length == 1) {
            return obj[key]
        } else {
            if (ns in obj["__NS"]) {
                return obj["__NS"][ns].get(rest);
            }
        }
    }

    return obj
}

module.exports = NSMap;