/**
 * defaultPubSub Template lifecycle methods
 */
Template.progressivePubSub.onCreated(function() {
  this.subscribe('progressiveData');
});

/**
 * defaultPubSub Template helpers/events
 */
Template.progressivePubSub.helpers({
  dataElems: function() {
    return DataElements.find({});
  },
  dataCount: function() {
    return DataElements.find({}).count();
  }
});
