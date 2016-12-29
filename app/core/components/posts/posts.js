export default ngModule => {

  ngModule.directive('posts', function posts(PostService, $sce) {
    return {
      template: require('./posts.jade'),
      controllerAs: 'vm',
      controller: function postsCtrl() {

        this.sanitize = (html) =>{
          return $sce.trustAsHtml(html);
        };

        this.posts = PostService.getPosts();

        this.getRandomChala = () =>{
          const chalas = [
            require('../../../images/chalas/zico0.jpg'),
            require('../../../images/chalas/zico1.jpg'),
            require('../../../images/chalas/zico2.jpg'),
            require('../../../images/chalas/zico3.jpg'),
            require('../../../images/chalas/zico4.jpg'),
            require('../../../images/chalas/zico5.jpg'),
            require('../../../images/chalas/zico6.jpg'),
            require('../../../images/chalas/zico7.jpg'),
            require('../../../images/chalas/zico8.jpg'),
            require('../../../images/chalas/zico9.jpg'),
            require('../../../images/chalas/zico10.jpg'),
            require('../../../images/chalas/zico11.jpg'),
            require('../../../images/chalas/zico12.jpg'),
            require('../../../images/chalas/zico13.jpg'),
            require('../../../images/chalas/zico14.jpg'),
            require('../../../images/chalas/zico15.jpg'),
            require('../../../images/chalas/zico15.jpg'),
            require('../../../images/chalas/zico16.jpg'),
            require('../../../images/chalas/zico17.jpg'),
            require('../../../images/chalas/zico18.jpg'),
            require('../../../images/chalas/zico19.jpg'),
            require('../../../images/chalas/zico20.jpg'),
            require('../../../images/chalas/zico21.jpg'),
          ];
          return _.sample(chalas);
        };
      }
    };
  });
};
