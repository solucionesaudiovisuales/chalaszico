export default ngModule => {
  ngModule.controller('HomeCtrl', function HomeCtrl($log) {
    $log.log("Hi!");

  });
};
