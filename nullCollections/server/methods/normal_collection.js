Meteor.methods({
  isNormalCollectionDefined: function() {
    return !(typeof NormalCollection === "undefined");
  },

  dumpNullNameServerCollection: function() {
    console.log('In dumpNullNameServerCollection');
    return dumpObjectMethods(NullNameServerCollection, true);
  },
  dumpNullNameServerCollectionCollection: function() {
    console.log('In dumpNullNameServerCollectionCollection');
    return dumpObjectMethods(NullNameServerCollection._collection, true);
  }
});
