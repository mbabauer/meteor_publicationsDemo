Meteor.methods({
  isNormalCollectionDefined: function() {
    return !(typeof NormalCollection === "undefined");
  },

  dumpNullNameServerCollection: function() {
    return dumpObjectMethods(NullNameServerCollection, true);
  },
  dumpNullNameServerCollectionCollection: function() {
    return dumpObjectMethods(NullNameServerCollection._collection, true);
  }
});
