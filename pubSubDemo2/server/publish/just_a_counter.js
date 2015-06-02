/**
 * This is an example in which we are doing a very simple aggrigation of data.
 * In this example, we don't want to send the full data, only a counter that
 * is keeping track of the count.
 */
Meteor.publish('just-counter', function() {
  var self = this;
  var counter = 0;

  /**
   * We send this now because we need to establish the initial count.
   */
  self.added("just-counter", 1, {count: counter});
  self.ready();   // Call ready() now!

  /* Create an observer to see when the cursor changes, but instead of returning
   * the results we simply increment the counter and return that.  Also, we will
   * be returning everything with the same id, so we will essentially have a
   * Collection with only one record on the Client.
   */
  var subHandle = NormalCollection.find().observeChanges({
    added: function(id, fields) {
      counter++;
      self.changed("just-counter", 1, {count: counter});
    },
    changed: function(id, fields) {
      // Ignored...the count doesn't change on an update
    },
    removed: function(id) {
      counter--;
      self.changed("just-counter", 1, {count: counter});
    }
  });

  // This tells the observer to stop when the publication stops.
  self.onStop(function() {
    subHandle.stop();
  });
});
