
/* //TODO bước 2.1---->import cả thằng firebase nha mấy đứa*/

import firebase from 'firebase/app';

/* //TODO bước 2.2---->import thằng này để thống kê*/

import 'firebase/analytics';

/* //TODO bước 2.3---->import thằng này để xác thực đăng nhập đăng ký nhanh*/

import 'firebase/auth';


/* //TODO bước 2.4---->import thằng này là biến thể mới của realtime database*/

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC80l55IQ12CgShd9lwzqXTCV6dxKLCHg0",
    authDomain: "react-app-chat-658af.firebaseapp.com",
    projectId: "react-app-chat-658af",
    storageBucket: "react-app-chat-658af.appspot.com",
    messagingSenderId: "967036349917",
    appId: "1:967036349917:web:6df8a4694d33d79825da34",
    measurementId: "G-QPT0TNW5J3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();







/* //TODO bước 3---->import xong nhớ xuất 2 thằng này ra để các components khác dùng*/
  const auth = firebase.auth();
  const db = firebase.firestore();

  export {db , auth};
  export default firebase;