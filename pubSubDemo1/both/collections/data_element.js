DataElement = function(document) {
  if (document) {
    this._id = document._id;
    this._created_on = document.created_on;
    this._value = document.value;
  }
};

DataElement.prototype = {
  get id() {
    return this._id;
  },
  get created_on() {
    return this._created_on;
  },
  set created_on(value) {
    this._created_on = value;
  },
  get value() {
    return this._value;
  },
  set value(value) {
    this._value = value;
  },
  save: function() {
    var that = this;
    var doc = {
      created_on: this._created_on,
      value: this._value
    };

    if (!this._id) {
      // This is a new DataElements
      that._id = DataElements.insert(doc);
    } else {
      // This is an updated DataElements
      DataElements.update({_id: this._id}, {$set: doc});
    }
  },
  remove: function() {
    DataElements.remove({_id: this.id});
  }
};
DataElements = new Meteor.Collection('data_elements', {
  transform: function(doc) {
    return new DataElement(doc);
  }
});
