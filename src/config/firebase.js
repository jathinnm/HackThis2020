import app from "firebase/app";

import "firebase/auth";
import "firebase/firebase-firestore";

//Configure and initilaize Firebase
const config = {
    apiKey: "AIzaSyBxeLdZZ8hu4zNgBvvx71o1PdYatQ1LIqk",
    authDomain: "hack-this-2020.firebaseapp.com",
    databaseURL: "https://hack-this-2020.firebaseio.com",
    projectId: "hack-this-2020",
    storageBucket: "hack-this-2020.appspot.com",
    messagingSenderId: "153089320385",
    appId: "1:153089320385:web:663e9b420e34933b28bb40",
    measurementId: "G-Y3RVS5RT6Z"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config)
      this.auth = app.auth()
      this.db = app.firestore()
    }
  
    //Login Method
    login(email, password) {
      return this.auth.signInWithEmailAndPassword(email, password)
    }
  
    //Logout User
    logout() {
      return this.auth.signOut()
    }
  
    //Registers user and creates profile with username
    async register(name, email, password) {
      await this.auth.createUserWithEmailAndPassword(email, password)
      return this.auth.currentUser.updateProfile({
        displayName: name,
       
      })
    }
    
    isInitialized() {
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
      })
    }
  
    //Obtains the Username
    getCurrentUsername() {
      return this.auth.currentUser && this.auth.currentUser.displayName
    }
    
    
  }
  
  export default new Firebase()