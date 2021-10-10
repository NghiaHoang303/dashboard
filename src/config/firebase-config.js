import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyD_i4gikCjbJV5CFt7kMFekVDk6AuCBIQg",
    authDomain: "mydashboard-f6d5b.firebaseapp.com",
    projectId: "mydashboard-f6d5b",
    storageBucket: "mydashboard-f6d5b.appspot.com",
    messagingSenderId: "848049765401",
    appId: "1:848049765401:web:c7a64e6357c6da4b1cbe88",
    measurementId: "G-NR802S87DS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.getAnalytics();

export {firebase};