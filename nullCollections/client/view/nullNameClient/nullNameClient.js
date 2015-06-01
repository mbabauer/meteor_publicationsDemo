/**
 * nullNameClient Template lifecycle methods
 */
Template.nullNameClient.onRendered(function() {
  // Call method to return if NormalCollection is defined on the Client
  Meteor.call('isNullNamedClientCollectionDefined', function(err, result) {
    Session.set('isServerDefined', result);
  });

  // Get Server-side methods on Meteor.default_server.method_handlers
  Meteor.call('dumpDefaultServerMethodHandlers', function(err, results) {
    if (!err) {
      Session.set("SERVER_METHODS", results);
    }
  });
});

/**
 * nullNameClient Template helper methods
 */
Template.nullNameClient.helpers({
  isClientDefined: function() {
    return !(typeof NullNameClientCollection === "undefined");
  },
  isServerDefined: function() {
    return Session.get('isServerDefined');
  },


  clientCollectionMethodsKeys: function() {
    var results = [];
    var dump = dumpObjectMethods(Meteor.default_connection._methodHandlers);
    _.each(Object.keys(dump), function(key, idx) {
      results.push(key);
    });
    return results;
  },
  serverCollectionMethodsKeys: function() {
    var results = [];
    var methods = Session.get("SERVER_METHODS");
    _.each(Object.keys(methods), function(key, idx) {
      results.push(key);
    });
    return results;
  },
});
