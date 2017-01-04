export default ngModule => {

  ngModule.directive('infiniteScroll', function infiniteScroll($window, $rootScope) {
    return {
      link: (scope, element) => {
        let offset = 4000;
        let canLoad = true;
        const e = element[0];
        const el = (e.toString() === "[object HTMLBodyElement]") ? angular.element($window) : element;
        $rootScope.$on('infiniteScroll.ended', () =>{
          canLoad = true;
        });

        el.bind('scroll', () => {
          if (canLoad && e.scrollTop + e.offsetHeight >= e.scrollHeight + offset) {
            canLoad = false;
            offset = offset + 4000;
            $rootScope.$broadcast('loadMore');
          }
        });
      }
    };
  });
};
