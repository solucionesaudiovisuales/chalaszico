require('./vendor')();

angular.module('chalasZico', [
  'ui.router',
  'angulartics',
  'angulartics.google.analytics',
  require('./config').name,
  require('./controllers').name,
  require('./directives').name,
  require('./services').name,
])

.constant('SETTINGS', {
  development: (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? true : false,
})
;

angular.element(document).ready(() => {
  angular.bootstrap(document, ['chalasZico'], {});
});

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//            .register('/sw.js')
//            .then(function() { console.log('SW Registered'); });
// }

