/**
 * Startup method to generate data in our collections
 */
Meteor.startup(function() {
  while (NormalCollection.find().count() < 1000) {
    var data = { created_on: new Date(), value: (Math.random() * 1000)};
    NormalCollection.insert(data);
  }

  SyncedCron.add({
    name: 'Normal Data Update',
    schedule: function(parser) {
      return parser.text('every 30 seconds');
    },
    job: function() {
      var data = { created_on: new Date(), value: (Math.random() * 1000)};
      NormalCollection.insert(data);
      var cursor = NormalCollection.find({}, {sort: {created_on: 1}});
      if (cursor.count() > 1500) {
        _.each(cursor.fetch(), function(element, idx) {
          if (idx <= (cursor.count() - 1500)) {
            NormalCollection.remove({_id: element._id});
          }
        });
      }
    }
  });

  SyncedCron.start();
});
