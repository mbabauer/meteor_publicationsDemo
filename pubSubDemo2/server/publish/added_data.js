/**
 * In this example we are adding additional data to the records.  In this case
 * we are adding an extra flag if the record was an original record, added
 * latter, or is an update.
 */
Meteor.publish('added_data', function() {
  var self = this;

  // This variable will be used to switch the stat from 'orig' to 'add' when
  // the original records have completed loading.
  var addedStat = 'orig';

  var subHandle = NormalCollection.find().observeChanges({
    added: function(id, fields) {
      fields.state = addedStat;
      self.added("normal_collection", id, fields);
    },
    changed: function(id, fields) {
      fields.state = "update";
      self.changed("normal_collection", id, fields);
    },
    removed: function(id) {
      self.removed("normal_collection", id);
    }
  });

  self.onStop(function() {
    subHandle.stop();
  });

  self.ready();

  // Since we sent the ready, we can now set the addedStat to 'add' so the
  // newly added records would be marked accordingly
  addedStat = 'add';
});
