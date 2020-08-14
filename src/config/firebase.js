import app from "firebase/app";

import "firebase/auth";
import "firebase/firebase-firestore";


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
  
    login(email, password) {
      return this.auth.signInWithEmailAndPassword(email, password)
    }
  
    logout() {
      return this.auth.signOut()
    }
  
    async register(name, email, password, number) {
      await this.auth.createUserWithEmailAndPassword(email, password)
      return this.auth.currentUser.updateProfile({
        displayName: name,
        phoneNumber:number
      })
    }
  
   
  
    isInitialized() {
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
      })
    }
  
    getCurrentUsername() {
      return this.auth.currentUser && this.auth.currentUser.displayName
    }
    getCurrentNumber() {
      return this.auth.currentUser && this.auth.currentUser.phoneNumber
    }
  
    
  }
  
  export default new Firebase()