/**
 * defaultPubSub Template lifecycle methods
 */
Template.defaultPubSub.onCreated(function() {
  this.subscribe('defaultData');
});

Template.defaultPubSub.onRendered(function() {
  $('tbody').selectable({
    filter:':not(td)',
    selected: function(e, ui) {
      $(ui.selected).addClass('success');
    },
    unselected: function(e, ui) {
      $(ui.unselected).removeClass('success');
    }
  });
});

/**
 * defaultPubSub Template helpers/events
 */
Template.defaultPubSub.helpers({
  dataElems: function() {
    return DataElements.find({});
  },
  dataCount: function() {
    return DataElements.find({}).count();
  }
});

Template.defaultPubSub.events({
  'click #updateDirect': function(event, tmpl) {
    var dataElem = Blaze.getData(tmpl.$('table tbody tr.success')[0]);
    if (dataElem) {
      dataElem.value = (Math.random() * 1000);
      dataElem.save();
    }
  },
  'click #updateIndirect': function(event, tmpl) {
    var dataElem = Blaze.getData(tmpl.$('table tbody tr.success')[0]);
    if (dataElem) {
      Meteor.call('updateDataValue', dataElem.id, (Math.random() * 1000));
    }
  },

  'click #addDirect': function(event, tmpl) {
    var dataElem = new DataElement({ created_on: new Date(), value: (Math.random() * 1000)});
    dataElem.save();
  },
  'click #addIndirect': function(event, tmpl) {
    Meteor.call('addData', (Math.random() * 1000));
  },

  'click #removeDirect': function(event, tmpl) {
    var dataElem = Blaze.getData(tmpl.$('table tbody tr.success')[0]);
    if (dataElem) {
      dataElem.remove();
    }
  },
  'click #removeIndirect': function(event, tmpl) {
    var dataElem = Blaze.getData(tmpl.$('table tbody tr.success')[0]);
    if (dataElem) {
      Meteor.call('removeData', dataElem.id);
    }
  },

  /**
   * Event handlers that call Meteor.methods directly on the collection
   */
  'click #updateSpecial': function(event, tmpl) {
    var dataElem = Blaze.getData(tmpl.$('table tbody tr.success')[0]);
    if (dataElem) {
      var find = {
        _id: dataElem.id
      };
      var update = {
        $set: {
          created_on: dataElem.created_on,
          value: (Math.random() * 1000)
        }
      };
      Meteor.call('/data_elements/update', find, update);
    }
  },
  'click #addSpecial': function(event, tmpl) {
    var insert = {
      created_on: new Date(),
      value: (Math.random() * 1000)
    };
    Meteor.call('/data_elements/insert', insert);
  },
  'click #removeSpecial': function(event, tmpl) {
    var dataElem = Blaze.getData(tmpl.$('table tbody tr.success')[0]);
    if (dataElem) {
      Meteor.call('/data_elements/remove', {_id: dataElem.id});
    }
  },
});
