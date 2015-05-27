/**
 * normalClientBreakdown Template lifecycle methods
 */
Template.normalClientBreakdown.onRendered(function() {

  Session.set("COLLECTION_METHODS", dumpObjectMethods(Meteor.Collection, true));
  Session.set("NORM_COLLECTION_METHODS", dumpObjectMethods(NormalCollection, true));
  Session.set("NORM_COLLECTION_COLLECTION_METHODS", dumpObjectMethods(NormalCollection._collection, true));

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

  console.log('Meteor: ', Meteor);
  console.log('_collection: ', NormalCollection);
});

/**
 * normalClientBreakdown Template helpers
 */
Template.normalClientBreakdown.helpers({
  collectionMethodKeys: function() {
    var results = [];
    _.each(Object.keys(Session.get('COLLECTION_METHODS')), function(key, idx) {
      results.push(key);
    });
    return results.sort();
  },
  selectedCollectionMethod: function() {
    var methodName = Session.get('selectedCollectionMethod');
    var methods = Session.get('COLLECTION_METHODS');
    return methods[methodName];
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
    return methods[methodName];
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
    return methods[methodName];
  }
});
