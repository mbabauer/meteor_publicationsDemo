/**
 * normalClientBreakdown Template lifecycle methods
 */
Template.normalClientBreakdown.onRendered(function() {

  Session.set("COLLECTION_METHODS", dumpObjectMethods(Meteor.Collection, true));
  Session.set("NORM_COLLECTION_METHODS", dumpObjectMethods(NormalCollection, true));
  Session.set("NORM_COLLECTION_COLLECTION_METHODS", dumpObjectMethods(NormalCollection._collection, true));
  Session.set("METHOD_HANDLERS_METHODS", dumpObjectMethods(Meteor.default_connection._methodHandlers, true));

  // jQuery UI selectable for Collection methods
  $('#collectionMethodsList ul').selectable({
    filter:'li',
    selected: function(e, ui) {
      $(ui.selected).addClass('active');
      var methodName = Blaze.getData(ui.selected);
      Session.set('selectedCollectionMethod', methodName);
    },
    unselected: function(e, ui) {
      $(ui.unselected).removeClass('active');
      Session.set('selectedCollectionMethod', undefined);
    }
  });

  // jQuery UI selectable for NormalCollection methods
  $('#normalCollectionMethodsList ul').selectable({
    filter:'li',
    selected: function(e, ui) {
      $(ui.selected).addClass('active');
      var methodName = Blaze.getData(ui.selected);
      Session.set('selectedNormalCollectionMethod', methodName);
    },
    unselected: function(e, ui) {
      $(ui.unselected).removeClass('active');
      Session.set('selectedNormalCollectionMethod', undefined);
    }
  });

  // jQuery UI selectable for NormalCollection methods
  $('#normalCollectionCollectionMethodsList ul').selectable({
    filter:'li',
    selected: function(e, ui) {
      $(ui.selected).addClass('active');
      var methodName = Blaze.getData(ui.selected);
      Session.set('selectedNormalCollectionCollectionMethod', methodName);
    },
    unselected: function(e, ui) {
      $(ui.unselected).removeClass('active');
      Session.set('selectedNormalCollectionCollectionMethod', undefined);
    }
  });

  // jQuery UI selectable for Meteor.default_connection._methodHandlers Methods methods
  $('#methodHandlersList ul').selectable({
    filter:'li',
    selected: function(e, ui) {
      $(ui.selected).addClass('active');
      var methodName = Blaze.getData(ui.selected);
      Session.set('selectedMethodHandlersMethod', methodName);
    },
    unselected: function(e, ui) {
      $(ui.unselected).removeClass('active');
      Session.set('selectedMethodHandlersMethod', undefined);
    }
  });
});

/**
 * normalClientBreakdown Template helpers
 */
Template.normalClientBreakdown.helpers({
  collectionMethodKeys: function() {
    var results = [];
    var collMeths = Session.get('COLLECTION_METHODS');
    if (collMeths) {
      _.each(Object.keys(collMeths), function(key, idx) {
        results.push(key);
      });
    }
    return results.sort();
  },
  selectedCollectionMethod: function() {
    var methodName = Session.get('selectedCollectionMethod');
    var methods = Session.get('COLLECTION_METHODS');
    if (methods[methodName]) {
      return methods[methodName];
    }
  },


  normalCollectionMethodKeys: function() {
    var results = [];
    _.each(Object.keys(Session.get('NORM_COLLECTION_METHODS')), function(key, idx) {
      results.push(key);
    });
    return results.sort();
  },
  selectedNormalCollectionMethod: function() {
    var methodName = Session.get('selectedNormalCollectionMethod');
    var methods = Session.get('NORM_COLLECTION_METHODS');
    if (methods[methodName]) {
      return methods[methodName];
    }
  },


  normalCollectionCollectionMethodKeys: function() {
    var results = [];
    _.each(Object.keys(Session.get('NORM_COLLECTION_COLLECTION_METHODS')), function(key, idx) {
      results.push(key);
    });
    return results.sort();
  },
  selectedNormalCollectionCollectionMethod: function() {
    var methodName = Session.get('selectedNormalCollectionCollectionMethod');
    var methods = Session.get('NORM_COLLECTION_COLLECTION_METHODS');
    if (methods[methodName]) {
      return methods[methodName];
    }
  },


  methodHandlersKeys: function() {
    var results = [];
    _.each(Object.keys(Session.get('METHOD_HANDLERS_METHODS')), function(key, idx) {
      results.push(key);
    });
    return results.sort();
  },
  selectedMethodHandlersMethod: function() {
    var methodName = Session.get('selectedMethodHandlersMethod');
    var methods = Session.get('METHOD_HANDLERS_METHODS');
    if (methods[methodName]) {
      return methods[methodName];
    }
  }
});
