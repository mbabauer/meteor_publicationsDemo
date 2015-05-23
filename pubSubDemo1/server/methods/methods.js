Meteor.methods({
  /**
   * Dumps the methods in Meteor.default_server.method_handlers and returns the
   * results.
   */
  dumpMethods: function() {
    var keys = Object.keys(Meteor.default_server.method_handlers);
    var ret = {};
    _.each(keys, function(key, idx) {
      ret[key] = Meteor.default_server.method_handlers[key].toString();
    });
    return ret;
  }
});
