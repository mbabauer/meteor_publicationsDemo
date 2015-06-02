/**
 * counter Template lifecycle methods
 */
Template.counter.onRendered(function() {
  this.subscribe('just-counter');
});

/**
 * counter Template helpers/events
 */
Template.counter.helpers({
  counter: function() {
    return JustACounter.findOne({});
  }
});

Template.counter.events({
  'click #addBtn': function(event, tmpl) {
    Meteor.call('addNormalCollectionRecord');
  }
});
