// Requerir/importar aquí las librerías (fonts, css, js)
// de uso común en todo el proyecto.

module.exports = () => {
  /* Styles */
  require('../css/main.scss');
  /* JS */
  global.$ = global.jQuery = require('jquery');
  require('angular');
  require('angular-sanitize');
  require('angular-i18n/angular-locale_es-cl.js');
  require('angular-ui-router');
  require('lodash');
  require('angularfire');
  require('angulartics');
  require('angulartics-google-analytics');

};
