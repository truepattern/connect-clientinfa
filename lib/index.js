// connect-clientinfa middleware
var path = require('path')
  , basename = path.basename
  , fs = require('fs');

/**
 * Auto-load middleware getters.
 */
exports.middleware = {
};


/**
 * Auto-load bundled middleware with getters.
 */
fs.readdirSync(__dirname + '/middleware').forEach(function(filename) {
    if (!/\.js$/.test(filename)) return;
    var name = basename(filename, '.js');                                                    
    function load() {
      return require('./middleware/' + name);
    }
    exports.middleware.__defineGetter__(name, load);
    exports.__defineGetter__(name, load);
  });
