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
      getPosts: (page=1) => {
        return $firebaseArray(ref.child("posts").orderByChild('createdAt'));
      }
    };
  });
};
