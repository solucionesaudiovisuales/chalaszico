export default [ "$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      template: require('../modules/login/login.jade'),
    })
    .state('home', {
      url: '/',
      controller: 'HomeCtrl',
      template: require('../modules/home/home.jade'),
    })
    ;
}];
