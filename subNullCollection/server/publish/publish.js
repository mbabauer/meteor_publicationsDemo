/**
 * This setups up a Publication for the NullNameServerCollection.
 *
 * We have to do it manually because, as the name of the collection suggests,
 * the name of the collection has been set to "null".  This means none of the
 * auto-wired DDP stuff is present, and the publish method would have no way
 * to know what to call the collection anyways.
 */
Meteor.publish("nullServerCollection", function(){
  var self = this;

  /* Create an observer to see when the cursor changes.  All
   * records that are present are read in as "added" at first
   * since they are new to the Cursor.  Any records added after
   * the Cursor is created gets ran through the "changed", and
   * any records removed after the Cursor is created is ran
   * through the "removed".
   */
  var subHandle = NullNameServerCollection.find().observeChanges({
    added: function(id, fields) {
      self.added("null_server", id, fields);
    },
    changed: function(id, fields) {
      self.changed("null_server", id, fields);
    },
    removed: function(id) {
      self.removed("null_server", id);
    }
  });

  self.ready();   // Call ready() now!

  // This tells the observer to stop when the publication stops.
  self.onStop(function() {
    subHandle.stop();
  });
});
