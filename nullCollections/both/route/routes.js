FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
    FlowLayout.render('home');
  }
});


FlowRouter.route('/nullNameServer', {
  name: 'nullNameServer',
  action: function(params) {
    FlowLayout.render('nullNameServer');
  }
});
