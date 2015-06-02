FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
    FlowLayout.render('home');
  }
});

FlowRouter.route('/counter', {
  name: 'counter',
  action: function(params) {
    FlowLayout.render('counter');
  }
});

FlowRouter.route('/addeddata', {
  name: 'addeddata',
  action: function(params) {
    FlowLayout.render('addeddata');
  }
});

FlowRouter.route('/files', {
  name: 'files',
  action: function(params) {
    FlowLayout.render('files');
  }
});
