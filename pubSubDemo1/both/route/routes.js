FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
    FlowLayout.render('home');
  }
});


FlowRouter.route('/default', {
  name: 'default',
  action: function(params) {
    FlowLayout.render('defaultPubSub');
  }
});

FlowRouter.route('/progressive', {
  name: 'progressive',
  action: function(params) {
    FlowLayout.render('progressivePubSub');
  }
});

FlowRouter.route('/methods', {
  name: 'methods',
  action: function(params) {
    FlowLayout.render('dumpMethods');
  }
});
