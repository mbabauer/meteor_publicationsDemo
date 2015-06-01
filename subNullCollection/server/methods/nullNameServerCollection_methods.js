/**
 * This setups up the Meteor.methods that should be expected present for the
 * Client-side collection to call.  We don't do anything special at all here,
 * just call the corresponding insert/update/remove on the NullNameServerCollection.
 */
Meteor.methods({
  '/null_server/insert': function(obj) {
    NullNameServerCollection.insert(obj);
  },
  '/null_server/remove': function(obj) {
    NullNameServerCollection.remove(obj);
  },
  '/null_server/update': function(matcher, obj) {
    NullNameServerCollection.update(matcher, obj);
  }
});
