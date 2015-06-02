Meteor.methods({
  addNormalCollectionRecord: function() {
    var data = { created_on: new Date(), value: (Math.random() * 1000)};
    NormalCollection.insert(data);
  }
});
