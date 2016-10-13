export default ngModule => {

  ngModule.directive('posts', function posts(PostService, $sce) {
    return {
      template: require('./posts.jade'),
      controllerAs: 'vm',
      controller: function postsCtrl() {
        PostService.getPost().then( response => {
          this.posts = [];
          angular.forEach(response, p => {
            if (p.html) {
              p.sanitized_html = $sce.trustAsHtml(p.html);
            }
            console.log(p);
            this.posts.push(p);
          });
        });

        // this.getFullHtml = (untrusted) =>{
        //   console.log(untrusted)
        //   return $sce.getTrustedHtml(untrusted)
        // }
      }
    };
  });
};
