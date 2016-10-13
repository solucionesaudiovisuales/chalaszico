export default ngModule => {
  ngModule.config(
    ($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('login', {
          url: '/login',
          controller: 'LoginCtrl',
          template: require('../components/login/login.jade'),
        })
        .state('home', {
          url: '/',
          controller: 'HomeCtrl',
          template: require('../components/home/home.jade'),
        })
        ;
    }
  );
};
