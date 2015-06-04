/**
 * subNullServer Template lifecycle methods
 */
Template.subNullServer.onCreated(function() {
  this.subscribe("nullServerCollection");
});

/**
 * subNullServer Template helper/events
 */
Template.subNullServer.helpers({
  nullRecords: function(){
    return NullNameServerCollection.find();
  }
});

Template.subNullServer.events({
  'click button.btnAdd': function(event, tmpl) {
    NullNameServerCollection.insert({created_on: new Date()});
  },
  'click button.btnRemove': function(event, tmpl) {
    var nullRecord = Blaze.getData(event.target);
    if (nullRecord && nullRecord._id) {
      NullNameServerCollection.remove({_id: nullRecord._id});
    }
  },
  'click button.btnUpdate': function(event, tmpl) {
    var nullRecord = Blaze.getData(event.target);
    if (nullRecord && nullRecord._id) {
      NullNameServerCollection.update({_id: nullRecord._id}, {$set: {created_on: new Date()}});
    }
  }
});
