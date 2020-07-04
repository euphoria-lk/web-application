import firebase from 'firebase/app'
import 'firebase/storage'

 var firebaseConfig = {
    apiKey: "AIzaSyDjOzHVxpB92O3xrmKXYxWfbtklo3jZqio",
    authDomain: "xplore-1.firebaseapp.com",
    databaseURL: "https://xplore-1.firebaseio.com",
    projectId: "xplore-1",
    storageBucket: "xplore-1.appspot.com",
    messagingSenderId: "333841015232",
    appId: "1:333841015232:web:60c0772bd1dcaa2cfba825"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()

export {
    storage, firebase as default
}