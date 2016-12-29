export default ngModule => {

  ngModule.directive('imgNotFound', function imgNotFound() {
    return {
      restrict: 'A',
      priority: 99,
      link: function(scope, element) {
        console.log(element.find('img'));
      }
    };
  });
};
