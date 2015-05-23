/**
 * dumpMethods Template lifecycle methods
 */
Template.dumpMethods.onRendered(function() {
  Meteor.call('dumpMethods', function(err, results) {
    if (!err) {
      Session.set("METHODS", results);
    }
  });

  $('ul').selectable({
    filter:'li',
    selected: function(e, ui) {
      $(ui.selected).addClass('active');
      var methodName = Blaze.getData(ui.selected);
      Session.set('selectedMethod', methodName);
    },
    unselected: function(e, ui) {
      $(ui.unselected).removeClass('active');
    }
  });
});

/**
 * dumpMethods Template helpers/events
 */
Template.dumpMethods.helpers({
  methodKeys: function() {
    var methods = Session.get("METHODS");
    return Object.keys(methods);
  },
  selectedMethod: function() {
    var methodName = Session.get('selectedMethod');
    var methods = Session.get('METHODS');
    return methods[methodName];
  }
});
