/**
 * This is here to "simulate" a published named collection.  We will be using
 * our own custom Publication along with our own set of Meteor.methods to make
 * this Collection plumb itself up to the real collection on the server.
 */
NullNameServerCollection = new Mongo.Collection("null_server");
