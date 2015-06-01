FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
    FlowLayout.render('home');
  }
});

FlowRouter.route('/subNullServer', {
  name: 'subNullServer',
  action: function(params) {
    FlowLayout.render('subNullServer');
  }
});
