export default ngModule => {
  require('./components/chalas/chalas')(ngModule);
  require('./components/posts/posts')(ngModule);
  require('./components/posts/imgnotfound')(ngModule);
  require('./components/posts/err-src')(ngModule);
  require('./components/home/background')(ngModule);
};
