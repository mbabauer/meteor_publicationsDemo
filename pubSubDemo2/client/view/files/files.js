/**
 * files Template lifecycle methods
 */
Template.files.onCreated(function() {
  this.subscribe('files');
});

/**
 * files Template helpers/events
 */
Template.files.helpers({
  files: function() {
    return Files.find({});
  }
});
