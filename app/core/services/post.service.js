/* eslint-disable */
export default ngModule => {
  ngModule.service('PostService', function PostService($firebaseArray) {
    const firebase = require('firebase/app');
    
    require('firebase/auth');
    require('firebase/database');
    require('firebase/storage');

    var config = {
      apiKey: "AIzaSyDAkEW011eISNY7zvVX4QAUCsoSDQgj5oA",
      authDomain: "chalas-zico.firebaseapp.com",
      databaseURL: "https://chalas-zico.firebaseio.com",
      storageBucket: "chalas-zico.appspot.com",
      messagingSenderId: "435648610445"
    };
    firebase.initializeApp(config);
    
    const ref = firebase.database().ref();
    
    return {
      getPost: (page=1) => {
        let posts = $firebaseArray(ref.child("posts"));
        return posts.$loaded();
      }
    };
  });
};
