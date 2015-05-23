/**
 * This creates a "progressive-loading" publication by calling the ready() first
 * before any data is sent.  The result is that the template should render
 * first, then the data should start loading reactively.  This would be similar
 * to if someone had added data after the page was loaded.
 */

Meteor.publish('progressiveData', function() {
  var self = this;

  self.ready();   // Call ready() now!

  /* Create an observer to see when the cursor changes.  All
   * records that are present are read in as "added" at first
   * since they are new to the Cursor.  Any records added after
   * the Cursor is created gets ran through the "changed", and
   * any records removed after the Cursor is created is ran
   * through the "removed".
   */
  var subHandle = DataElements.find().observeChanges({
    added: function(id, fields) {
      self.added("data_elements", id, fields);
    },
    changed: function(id, fields) {
      self.changed("data_elements", id, fields);
    },
    removed: function(id) {
      self.removed("data_elements", id);
    }
  });

  // This tells the observer to stop when the publication stops.
  self.onStop(function() {
    subHandle.stop();
  });
});
