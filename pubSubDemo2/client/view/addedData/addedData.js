/**
 * addeddata Template lifecycle methods
 */
Template.addeddata.onRendered(function() {
  this.subscribe('added_data');
});

/**
 * addeddata Template helpers/events
 */
Template.addeddata.helpers({
  records: function() {
    return NormalCollection.find({}, {sort: {created_on: -1}});
  },
  classState: function(state) {
    switch(state) {
      case 'orig':
        return '';
      case 'update':
        return 'warning';
      case 'add':
        return 'info';
      default:
        return 'danger';
    }
  }
});

Template.addeddata.events({
  'click #addBtn': function(event, tmpl) {
    Meteor.call('addNormalCollectionRecord');
  },
  'click .btnUpdate': function(event, tmpl) {
    var data = Blaze.getData(event.target);
    NormalCollection.update({_id: data._id}, {$set: {value: (Math.random() * 1000)}});
  },
  'click .btnRemove': function(event, tmpl) {
    var data = Blaze.getData(event.target);
    NormalCollection.remove({_id: data._id});
  }
});
