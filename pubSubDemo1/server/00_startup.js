/**
 * Startup method to generate data in our collections
 */
Meteor.startup(function() {
  while (DataElements.find().count() < 1000) {
    var data = new DataElement({ created_on: new Date(), value: (Math.random() * 1000)});
    data.save();
  }

  SyncedCron.add({
    name: 'Data Add Cron',
    schedule: function(parser) {
      return parser.text('every 30 seconds');
    },
    job: function() {
      var data = new DataElement({ created_on: new Date(), value: (Math.random() * 1000)});
      data.save();
      var dataCursor = DataElements.find({}, {sort: {created_on: 1}});
      if (dataCursor.count() > 1500) {
        _.each(dataCursor.fetch(), function(element, idx) {
          if (idx <= (dataCursor.count() - 1500)) {
            DataElements.remove({_id: element._id});
          }
        });
      }
    }
  });

  SyncedCron.start();
});
