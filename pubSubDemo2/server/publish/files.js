fs = Npm.require('fs');

Meteor.publish('files', function() {
  var self = this;

  var watcher = chokidar.watch('/tmp', {
    ignored: /[\/\\]\./,
    persistent: true
  });

  /*
   * We have to wrap the callback functions in Meteor.bindEnvironment() because
   * all functions have to run withing a Fiber, and the callback here breaks
   * that.  Wrapping it sets up the Fiber as well as some other "housekeeping"
   * tasks.
   */
  watcher.on('add', Meteor.bindEnvironment(function(path, stats) {
    self.added('files', path, {
      'type': 'FILE',
      created_on: stats && stats.ctime ? stats.ctime : fs.statSync(path).ctime,
      modified_on: stats && stats.mtime ? stats.mtime : fs.statSync(path).mtime,
      accessed_on: stats && stats.atime ? stats.atime : fs.statSync(path).atime,
      contents: fs.readFileSync(path) });
  }, function(err) { console.log(err); }));
  watcher.on('addDir', Meteor.bindEnvironment(function(path, stats) {
    self.added('files', path, {
      'type': 'DIR',
      created_on: stats && stats.ctime ? stats.ctime : fs.statSync(path).ctime,
      modified_on: stats && stats.mtime ? stats.mtime : fs.statSync(path).mtime,
      accessed_on: stats && stats.atime ? stats.atime : fs.statSync(path).atime,
      contents: null });
  }, function(err) { console.log(err); }));

  watcher.on('change', Meteor.bindEnvironment(function(path, stats) {
    self.changed('files', path, {
      'type': 'FILE',
      created_on: stats && stats.ctime ? stats.ctime : fs.statSync(path).ctime,
      modified_on: stats && stats.mtime ? stats.mtime : fs.statSync(path).mtime,
      accessed_on: stats && stats.atime ? stats.atime : fs.statSync(path).atime,
      contents: stats && stats.isFile() ? fs.readFileSync(path) : null });
  }, function(err) { console.log(err); }));

  watcher.on('unlink', Meteor.bindEnvironment(function(path) {
    self.removed('files', path);
  }, function(err) { console.log(err); }));
  watcher.on('unlinkDir', Meteor.bindEnvironment(function(path) {
    self.removed('files', path);
  }, function(err) { console.log(err); }));

  self.onStop(function() {
    watcher.close();
  });
});
