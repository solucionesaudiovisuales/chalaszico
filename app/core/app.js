require('./vendor')();

const ngModules = [
  'ngSanitize',
  'ui.router',
  'firebase',
  'angulartics',
  'angulartics.google.analytics',
];

const ngModule = angular.module('chalasZico', ngModules);

require('./config')(ngModule);
require('./services')(ngModule);
require('./directives')(ngModule);
require('./controllers')(ngModule);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['chalasZico'], {});
});

$("img").bind('error', (ev) => {
	console.log("eroror")
	$(this).attr('src','/path/to/no-artwork-available.jpg');
});

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//            .register('/sw.js')
//            .then(function() { console.log('SW Registered'); });
// }

