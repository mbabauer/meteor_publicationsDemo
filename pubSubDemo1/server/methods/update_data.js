Meteor.methods({
  updateDataValue: function(dataId, newValue) {
    if (dataId) {
      DataElements.update({_id: dataId}, {$set: {value: newValue}});
    }
  },
  addData: function(newValue) {
    DataElements.insert({
      created_on: new Date(),
      value: newValue
    });
  },
  removeData: function(dataId) {
    if (dataId) {
      DataElements.remove({_id: dataId});
    }
  }
});
