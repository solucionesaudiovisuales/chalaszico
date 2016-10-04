// Requerir/importar aquí las librerías (fonts, css, js)
// de uso común en todo el proyecto.

module.exports = function() {
  /* Styles */
  require('bootstrap/dist/css/bootstrap.css');
  require('../css/main.scss');
  /* JS */
  require('angular');
  require('angular-i18n/angular-locale_es-cl.js');
  require('angular-ui-router');
  require('lodash');
  require('angulartics');
  require('angulartics-google-analytics');
};
