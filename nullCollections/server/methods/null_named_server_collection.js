Meteor.methods({
  isNullNamedCollectionDefined: function() {
    return !(typeof NullNameServerCollection === "undefined");
  }
});
