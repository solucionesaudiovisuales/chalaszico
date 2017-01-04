export default ngModule => {

  ngModule.directive('chalas', function chalas($document, $window ) {
    return {
      template: require('./chalas.jade'),
      restrict: "E",
      link: function () {
        const radius = 20;
        const rotationSpeed = 0.5;

        angular.element($window).bind("scroll", () => {
          const scroll = $window.pageYOffset / 100 * rotationSpeed;
          const offsety = Math.floor((radius * Math.sin(scroll)));

          angular.element(document.querySelector('#chala1')).css('margin-top', offsety);
          angular.element(document.querySelector('#chala2')).css('margin-top', offsety * -1);

        });
      },
    };
  });
};
