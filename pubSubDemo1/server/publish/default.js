/**
 * This creates a default publication of all data called "defaultData" by simply
 * returning a cursor.
 */
Meteor.publish('defaultData', function() {
  return DataElements.find();
});
