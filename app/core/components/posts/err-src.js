export default ngModule => {

  ngModule.directive('errSrc', function errSrc() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('error', () => {
          if (attrs.src !== attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
      }
    };
  });
};
