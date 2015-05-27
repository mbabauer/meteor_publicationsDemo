/**
 * normal Template lifecycle methods
 */
Template.normal.onRendered(function() {
  // Call method to return if NormalCollection is defined on the server
  Meteor.call('isNormalCollectionDefined', function(err, result) {
    Session.set('isServerDefined', result);
  });

  // Get server-side methods on Meteor.default_server.method_handlers
  Meteor.call('dumpDefaultServerMethodHandlers', function(err, results) {
    if (!err) {
      Session.set("SERVER_METHODS", results);
    }
  });
});

/**
 * Normal Template helper methods
 */
Template.normal.helpers({
  isClientDefined: function() {
    return !(typeof NormalCollection === "undefined");
  },
  isServerDefined: function() {
    return Session.get('isServerDefined');
  },


  clientCollectionMethodsKeys: function() {
    var results = [];
    var dump = dumpObjectMethods(Meteor.default_connection._methodHandlers);
    _.each(Object.keys(dump), function(key, idx) {
      if (key.startsWith('/normal_collection')) {
        results.push(key);
      }
    });
    return results;
  },
  serverCollectionMethodsKeys: function() {
    var results = [];
    var methods = Session.get("SERVER_METHODS");
    _.each(Object.keys(methods), function(key, idx) {
      if (key.startsWith('/normal_collection')) {
        results.push(key);
      }
    });
    return results;
  },
});
