Meteor.methods({
  /**
   * Dumps the methods in Meteor.default_server.method_handlers and returns the
   * results.
   */
  dumpDefaultServerMethodHandlers: function() {
    return dumpObjectMethods(Meteor.default_server.method_handlers);
  },

  /**
   * Dumps the methods in Meteor.Collection and returns the results
   */
  dumpMeteorCollection: function() {
    return dumpObjectMethods(Meteor.Collection, true);
  },
});
