/**
 * files Template lifecycle methods
 */
Template.files.onRendered(function() {
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
