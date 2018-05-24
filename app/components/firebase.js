import * as firebase from 'firebase'

class Firebase {
  static initialize(){
    firebase.initializeApp({
      apiKey: "AIzaSyAM3ZIHIiRKtwY0qOh0MCtSEWjD1Rg3ZEc",
      authDomain: "fullteach-82c40.firebaseapp.com",
      databaseURL: "https://fullteach-82c40.firebaseio.com",
      projectId: "fullteach-82c40",
      storageBucket: "fullteach-82c40.appspot.com",
      messagingSenderId: "76856350242"
    });
  }

  static getRef() {
    return firebase.database().ref();
  }

  static getAuth() {
    return firebase.auth();
  }

  static getUid() {
    var user = firebase.auth().currentUser;
    return user.uid;
  }

  static getCurrentEmail() {
    var user = firebase.auth().currentUser;
    return user.email;
  }



}

module.exports = Firebase
