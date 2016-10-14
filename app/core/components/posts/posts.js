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
        this.like = () => {
          // const b = Math.floor((Math.random() * 100) + 1);
          // const d = ["flowOne", "flowTwo", "flowThree"];
          // const a = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"];
          // const c = (Math.random() * (1.6 - 1.2) + 1.2).toFixed(1);
          // $('<div class="heart part-' + b + " " + a[Math.floor((Math.random() * 6))] + '" style="font-size:' + Math.floor(Math.random() * (50 - 22) + 22) + 'px;"><i class="fa fa-heart"></i></div>').appendTo(".hearts").css({
          // animation: "" + d[Math.floor((Math.random() * 3))] + " " + c + "s linear"
          // });
          // $(".part-" + b).show();
          // setTimeout(function() {
          // $(".part-" + b).remove()
          // }, c * 900);
        };
        // this.getFullHtml = (untrusted) =>{
        //   console.log(untrusted)
        //   return $sce.getTrustedHtml(untrusted)
        // }
      }
    };
  });
};
