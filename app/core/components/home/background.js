export default ngModule => {

  ngModule.directive('randomBg', function randomBackground($interval ) {
    return {
      restrict: "C",
      link: function (scope, element) {
        let lastClass = '';
        $interval( () =>{
          const randomBackgroundClass = `bg-${_.random(1, 10)}`;
          angular.element(element).removeClass(lastClass);
          angular.element(element).addClass(randomBackgroundClass);
          lastClass = randomBackgroundClass;
        }, 15000);
      },
    };
  });
};
