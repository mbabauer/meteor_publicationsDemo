FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
    FlowLayout.render('home');
  }
});

FlowRouter.route('/normal', {
  name: 'normal',
  action: function(params) {
    FlowLayout.render('normal');
  }
});

FlowRouter.route('/normal/clientBreakdown', {
  name: 'normalClientBreakdown',
  action: function(params) {
    FlowLayout.render('normalClientBreakdown');
  }
});

FlowRouter.route('/normal/serverBreakdown', {
  name: 'normalServerBreakdown',
  action: function(params) {
    FlowLayout.render('normalServerBreakdown');
  }
});

FlowRouter.route('/nullNameClient', {
  name: 'nullNameClient',
  action: function(params) {
    FlowLayout.render('nullNameClient');
  }
});

FlowRouter.route('/nullNameServer', {
  name: 'nullNameServer',
  action: function(params) {
    FlowLayout.render('nullNameServer');
  }
});
