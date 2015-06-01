Meteor.methods({
  isNullNamedCollectionDefined: function() {
    return !(typeof NullNameServerCollection === "undefined");
  },

  isNullNamedClientCollectionDefined: function() {
    return !(typeof NullNameClientCollection === "undefined");
  }
});
